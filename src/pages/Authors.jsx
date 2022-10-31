import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { getPages } from "../utils/utils";
import AuthorController from "../controller/AuthorController";
import PaginationController from "../components/PaginationController";
import AuthorList from "../components/AuthorList";
import AuthorFilter from "../components/AuthorFilter";
import useDebounce from "../hooks/useDebounce";

function Authors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [authors, setAuthors] = useState([]);
  const [filter, setFilter] = useState({ search: "" });
  const debounceFilter = useDebounce(filter, 1000);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesLimit, setPagesLimit] = useState(10);

  const [authorsLoading, getAuthors, authorsError] = useFetch(async () => {
    let response = await AuthorController.getFilteredAuthors(filter);
    const amountOfAuthors = response.length;
    setTotalPages(getPages(amountOfAuthors, pagesLimit));

    response = await AuthorController.getFilteredAuthorsByPageAndLimit(
      currentPage,
      pagesLimit,
      filter
    );

    setAuthors(response);
  });

  useEffect(() => {
    getAuthors();
  }, [currentPage, debounceFilter]);

  return (
    <div className="authors container">
      <div className="authors__content">
        <AuthorFilter filter={filter} setFilter={setFilter} />
        <h1 className="caption">Авторы</h1>
        <AuthorList authorsLoading={authorsLoading} authors={authors} />
        {authorsLoading || (
          <PaginationController
            pages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Authors;
