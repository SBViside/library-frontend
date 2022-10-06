import BookItem from "./BookItem";
import Loader from "./UI/loader/Loader";

function BooksList({ books, booksLoading }) {
  if (!booksLoading && books.length < 1) {
    return <h1 className="books__notFound">Книг не найдено...</h1>;
  }

  return booksLoading ? (
    <Loader />
  ) : (
    <>
      <h1 className="caption">Книги</h1>

      <div className="booksList">
        {books.map((b) => (
          <BookItem key={b.id} book={b} />
        ))}
      </div>
    </>
  );
}

export default BooksList;
