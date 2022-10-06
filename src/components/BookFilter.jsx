import Button from "./UI/button/Button";
import { FaFilter } from "react-icons/fa";
import Input from "./UI/input/Input";
import Checkbox from "./UI/checkbox/Checkbox";

function BookFilter({ filter, setFilter, getBooks, ...props }) {
  const resetFilter = (e) => {
    setFilter({
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
  };

  return (
    <div className="books__filter">
      <h2>
        <FaFilter />
        Фильтры
      </h2>
      <div className="filter__content">
        <Input
          id="searchBar"
          type="search"
          placeholder="Название книги"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          value={filter.search}
        />
        <div className="filter__pages">
          <p style={{ fontSize: "20px", fontWeight: "700" }}>
            По количеству страниц
          </p>
          <div className="filter__counts">
            <Input
              id="startPage"
              type="number"
              placeholder="от"
              min="0"
              max="4990"
              step="10"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  page: { ...filter.page, from: e.target.value },
                })
              }
              value={filter.page.from}
            />
            <span>-</span>
            <Input
              id="endPage"
              type="number"
              placeholder="до"
              min="10"
              max="5000"
              step="10"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  page: { ...filter.page, to: e.target.value },
                })
              }
              value={filter.page.to}
            />
          </div>
        </div>
        <div className="filter__years">
          <p style={{ fontSize: "20px", fontWeight: "700" }}>По году релиза</p>
          <div className="filter__counts">
            <Input
              id="startYear"
              type="number"
              placeholder="с"
              min="1600"
              max="2022"
              step="1"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  year: { ...filter.year, from: e.target.value },
                })
              }
              value={filter.year.from}
            />
            <span>-</span>
            <Input
              id="endYear"
              type="number"
              placeholder="по"
              min="1600"
              max={new Date().getFullYear()}
              step="1"
              onChange={(e) =>
                setFilter({
                  ...filter,
                  year: { ...filter.year, to: e.target.value },
                })
              }
              value={filter.year.to}
            />
          </div>
        </div>
        <Checkbox
          id="stock"
          text="В наличии"
          onChange={(e) => setFilter({ ...filter, inStock: e.target.checked })}
          checked={filter.inStock}
        />
      </div>

      <Button id="reset_filter" onClick={resetFilter}>
        Сбросить
      </Button>
    </div>
  );
}

export default BookFilter;
