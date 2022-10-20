import Input from "./UI/input/Input";
import { FaFilter } from "react-icons/fa";

function AuthorFilter({ filter, setFilter, props }) {
  return (
    <div className="author__filter" {...props}>
      <div className="filter__header">
        <h2>
          <FaFilter />
          Фильтры
        </h2>
      </div>
      <Input
        id="searchBar"
        type="search"
        placeholder="Имя автора"
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        value={filter.search}
        maxLength="49"
      />
    </div>
  );
}

export default AuthorFilter;
