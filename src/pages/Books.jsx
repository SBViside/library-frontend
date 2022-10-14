import { useState, useEffect, useRef } from "react";
import BooksList from "../components/BooksList";
import useFetch from "../hooks/useFetch";
import BookFilter from "../components/BookFilter";
import useDebounce from "../hooks/useDebounce";
import { getPages } from "../utils/utils";
import PaginationController from "../components/PaginationController";
import { FILTER_PAGES, FILTER_YEAR } from "../utils/variables";
import BookController from "../controller/BookController";

function Books() {
  const hder = useRef();
  const [filter, setFilter] = useState({
    search: "",
    page: structuredClone(FILTER_PAGES),
    year: structuredClone(FILTER_YEAR),
    inStock: true,
  });
  const debounceFilter = useDebounce(filter, 1000);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesLimit, setPagesLimit] = useState(10);

  const [books, setBooks] = useState([]);
  const [booksLoading, getBooks, booksError] = useFetch(async () => {
    let response = await BookController.getFilteredBooks(filter);
    const amountOfBooks = response.length;
    setTotalPages(getPages(amountOfBooks, pagesLimit));

    response = await BookController.getFilteredBooksByPageAndLimit(
      currentPage,
      pagesLimit,
      filter
    );
    setBooks(response);
  });

  useEffect(() => {
    getBooks();
    hder.current.textContent =
      filter.search.length > 0
        ? `Книги по запросу «${filter.search}»`
        : "Книги";
  }, [debounceFilter, currentPage]);

  return (
    <div className="books container">
      <div className="books__content">
        {booksError ? (
          <h1 className="ERROR">{booksError}</h1>
        ) : (
          <>
            <BookFilter filter={filter} setFilter={setFilter} />
            <h1 className="caption" ref={hder}>
              Книги
            </h1>
            <BooksList books={books} booksLoading={booksLoading} />
          </>
        )}
      </div>
      {booksLoading || (
        <PaginationController
          pages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default Books;
