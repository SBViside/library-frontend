import BookItem from "./BookItem";
import Loader from "./UI/loader/Loader";

function BooksList({ books, booksLoading }) {
  return booksLoading ? (
    <Loader />
  ) : (
    <div className="booksList">
      {books.map((b) => (
        <BookItem key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BooksList;
