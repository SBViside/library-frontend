import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BooksList from "../components/BooksList";
import useFetch from "../hooks/useFetch";
import BookFilter from "../components/BookFilter";
import useDebounce from "../hooks/useDebounce";
import { getPages } from "../utils/utils";
import PaginationController from "../components/PaginationController";
import { CLEAR_FILTER } from "../utils/variables";
import BookController from "../controller/BookController";

function BooksID() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const [author, setAuthor] = useState("Загрузка...");
  const [filter, setFilter] = useState(structuredClone(CLEAR_FILTER));
  const debounceFilter = useDebounce(filter, 1000);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesLimit, setPagesLimit] = useState(10);

  const [books, setBooks] = useState([]);
  const [booksLoading, getBooks, booksError] = useFetch(async () => {
    let response = await BookController.getFilteredBooksByID(filter, id);
    const amountOfBooks = response.length;
    setTotalPages(getPages(amountOfBooks, pagesLimit));

    response = await BookController.getFilteredBooksByPageAndLimitAndID(
      currentPage,
      pagesLimit,
      filter,
      id
    );
    setBooks(response);

    if (response.length > 0 && author === "Загрузка...") {
      setAuthor(response[0].author);
    }
  });

  useEffect(() => {
    getBooks();
  }, [debounceFilter, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debounceFilter]);

  return (
    <div className="books container">
      <div className="books__content">
        {booksError ? (
          <h1 className="ERROR">{booksError}</h1>
        ) : (
          <>
            <BookFilter filter={filter} setFilter={setFilter} />
            <h1 className="caption">{author}</h1>
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

export default BooksID;
