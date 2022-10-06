import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import useFetch from "../hooks/useFetch";
import BookFilter from "../components/BookFilter";
import useDebounce from "../hooks/useDebounce";

function Books() {
  const [filter, setFilter] = useState({
    search: "",
    page: {
      from: 0,
      to: 5000,
    },
    year: {
      from: 1600,
      to: new Date().getFullYear(),
    },
    inStock: true,
  });
  const debounceFilter = useDebounce(filter, 1000);

  const [books, setBooks] = useState([]);
  const [booksLoading, getBooks, booksError] = useFetch(async () => {
    const response = await axios({
      method: "post",
      url: "/db/books",
      data: filter,
    });
    setBooks(response.data);
  });

  useEffect(() => {
    getBooks();
  }, [debounceFilter]);

  return (
    <div className="books container">
      <div className="books__content">
        <BookFilter filter={filter} setFilter={setFilter} getBooks={getBooks} />
        {booksError ?? <BooksList books={books} booksLoading={booksLoading} />}
      </div>
    </div>
  );
}

export default Books;
