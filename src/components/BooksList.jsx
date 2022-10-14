import { useContext } from "react";
import { loginContext } from "../context/loginContext";
import BookItem from "./BookItem";
import Loader from "./UI/loader/Loader";

function BooksList({ books, booksLoading }) {
  const { logined } = useContext(loginContext);

  if (!booksLoading && books.length < 1) {
    return <h1 className="books__notFound">Книг не найдено...</h1>;
  }

  return booksLoading ? (
    <Loader />
  ) : (
    <>
      <div className="booksList">
        {books.map((b) => (
          <BookItem key={b.id} book={b} logined={logined} />
        ))}
      </div>
    </>
  );
}

export default BooksList;
