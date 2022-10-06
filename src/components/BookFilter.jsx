import Button from "./UI/button/Button";
import { FaFilter } from "react-icons/fa";
import Input from "./UI/input/Input";
import Checkbox from "./UI/checkbox/Checkbox";

function BookFilter(props) {
  return (
    <div className="books__filter">
      <h2>
        <FaFilter />
        Фильтры
      </h2>
      <div className="filter__content">
        <Input id="searchBar" type="text" placeholder="Название книги" />
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
            />
            <span>-</span>
            <Input
              id="endPage"
              type="number"
              placeholder="до"
              min="10"
              max="5000"
              step="10"
            />
          </div>
        </div>
        <div className="filter__years">
          <p style={{ fontSize: "20px", fontWeight: "700" }}>По году релиза</p>
          <div className="filter__counts">
            <Input
              id="startPage"
              type="number"
              placeholder="с"
              min="1600"
              max="2022"
              step="1"
            />
            <span>-</span>
            <Input
              id="endPage"
              type="number"
              placeholder="по"
              min="1600"
              max="2022"
              step="1"
            />
          </div>
        </div>
        <Checkbox id="stock" text="В наличии" />
      </div>
      <div className="filter__buttons">
        <Button id="apply_filter">Применить</Button>
        <Button id="reset_filter">Сбросить</Button>
      </div>
    </div>
  );
}

export default BookFilter;
