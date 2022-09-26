import BookImage from "./styled/BookImage";

function BookItem({ book, ...props }) {
  return (
    <div className="bookItem" {...props}>
      <BookImage url={book.url} />
      <div className="bookItem__nfo">
        <h2>{book.name}</h2>
        <h3>{book.author}</h3>
      </div>
      <div className="bookItem__buttons">
        <button>Оформить</button>
        <button>Подробно</button>
      </div>
      <div className="book__underline"></div>
    </div>
  );
}

export default BookItem;
