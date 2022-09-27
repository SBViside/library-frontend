import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import { FaFilter } from "react-icons/fa";
import Button from "../components/UI/button/Button";
import useFetch from "../hooks/useFetch";
import Loader from "../components/UI/loader/Loader";

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
      <h1 className="caption">Книги</h1>
      <div className="books__content">
        <div className="books__filter">
          <h2>
            <FaFilter />
            Фильтры
          </h2>
          <Button>Применить</Button>
        </div>
        <BooksList books={books} booksLoading={booksLoading} />
      </div>
    </div>
  );
}

export default Books;
