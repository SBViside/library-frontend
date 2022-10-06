import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import useFetch from "../hooks/useFetch";
import BookFilter from "../components/BookFilter";

function Books() {
  const [books, setBooks] = useState([]);
  const [booksLoading, getBooks, booksError] = useFetch(async () => {
    const response = await axios.get("/db/books");
    setBooks(response.data);
  });

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="books container">
      <div className="books__content">
        <BookFilter />
        {booksError ?? <BooksList books={books} booksLoading={booksLoading} />}
      </div>
    </div>
  );
}

export default Books;
