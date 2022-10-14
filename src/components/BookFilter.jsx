import { useState } from "react";
import Button from "./UI/button/Button";
import { FaFilter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Input from "./UI/input/Input";
import Checkbox from "./UI/checkbox/Checkbox";
import Range from "./UI/range/Range";
import { FILTER_PAGES, FILTER_YEAR } from "../utils/variables";

function BookFilter({ filter, setFilter, ...props }) {
  const [opened, setOpened] = useState(false);

  const resetFilter = (e) => {
    setFilter({
      search: "",
      page: structuredClone(FILTER_PAGES),
      year: structuredClone(FILTER_YEAR),
      inStock: true,
    });
  };

  return (
    <div
      className={opened ? "books__filter opened" : "books__filter"}
      {...props}
    >
      <div className="filter__header">
        <h2>
          <FaFilter />
          Фильтры
        </h2>
        <Button onClick={() => setOpened(!opened)}>
          <RiArrowDropDownLine />
        </Button>
      </div>
      <div className="filter__content">
        <Input
          id="searchBar"
          type="search"
          placeholder="Название книги"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          value={filter.search}
          maxLength="49"
        />
        <div className="filter__ranges">
          <div className="filter__pages">
            <Range
              text={`По количеству страниц: ${filter.page.from} - ${filter.page.to}`}
              min={FILTER_PAGES.from}
              max={FILTER_PAGES.to}
              value={[filter.page.from, filter.page.to]}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  page: { from: e[0], to: e[1] },
                })
              }
            />
          </div>
          <div className="filter__years">
            <Range
              text={`По году релиза: ${filter.year.from} - ${filter.year.to}`}
              min={FILTER_YEAR.from}
              max={FILTER_YEAR.to}
              value={[filter.year.from, filter.year.to]}
              onChange={(e) =>
                setFilter({
                  ...filter,
                  year: { from: e[0], to: e[1] },
                })
              }
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
