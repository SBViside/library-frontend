import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import useFetch from "../hooks/useFetch";
import BookFilter from "../components/BookFilter";
import useDebounce from "../hooks/useDebounce";
import { getPages } from "../utils/utils";
import PaginationController from "../components/PaginationController";
import { FILTER_PAGES, FILTER_YEAR } from "../utils/variables";

function Books() {
  const [filter, setFilter] = useState({
    search: "",
    page: structuredClone(FILTER_PAGES),
    year: structuredClone(FILTER_YEAR),
    inStock: true,
  });
  const debounceFilter = useDebounce(filter, 1000);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesLimit, setPagesLimit] = useState(5);

  const [books, setBooks] = useState([]);
  const [booksLoading, getBooks, booksError] = useFetch(async () => {
    let response = await axios({
      method: "post",
      url: `/db/books/amount`,
      data: filter,
    });
    const amountOfBooks = response.data.length;

    setTotalPages(getPages(amountOfBooks, pagesLimit));

    response = await axios({
      method: "post",
      url: `/db/books/?page=${currentPage}&limit=${pagesLimit}`,
      data: filter,
    });
    setBooks(response.data);
  });

  useEffect(() => {
    getBooks();
  }, [debounceFilter, currentPage]);

  return (
    <div className="books container">
      <div className="books__content">
        <BookFilter filter={filter} setFilter={setFilter} getBooks={getBooks} />
        {booksError ?? <BooksList books={books} booksLoading={booksLoading} />}
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
