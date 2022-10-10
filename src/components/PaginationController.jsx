function PaginationController({
  pages,
  currentPage,
  setCurrentPage,
  ...props
}) {
  if (pages < 1) return null;
  return (
    <div className="pages" {...props}>
      {new Array(pages).fill(0).map((d, i) => {
        const page = i + 1;
        return (
          <div
            key={page}
            className={page === currentPage ? "page selected" : "page"}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}

export default PaginationController;
