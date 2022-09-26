import { useState } from "react";
import BooksList from "../components/BooksList";
import { FaFilter } from "react-icons/fa";
import Button from "../components/UI/button/Button";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      author: "Е А Охватюк",
      name: "Семь дней до Мегиддо",
      release_date: new Date(),
      description: "Описание для первой книги Охватюка Е А",
      pages: 120,
      weight: 309,
      total_amount: 7,
      avalible_amount: 6,
      total_orders: 0,
      url: "https://s4-goods.ozstatic.by/2000/537/31/101/101031537_0.jpg",
    },
    {
      id: 2,
      author: "Е А Охватюк",
      name: "Три дня Индиго",
      release_date: new Date(),
      description: "Описание для второй книги Охватюка Е А",
      pages: 210,
      weight: 340,
      total_amount: 3,
      avalible_amount: 3,
      total_orders: 2,
      url: "https://s5-goods.ozstatic.by/2000/768/70/101/101070768_0.jpg",
    },
    {
      id: 3,
      author: "Е А Охватюк",
      name: "Месяц за Рубиконом",
      release_date: new Date(),
      description: "Описание для финала книги Охватюка Е А",
      pages: 306,
      weight: 500,
      total_amount: 10,
      avalible_amount: 8,
      total_orders: 12,
      url: "https://book24.kz/upload/resize_cache/iblock/0ae/390_390_1/u7c8rix6zuptf0stzub2inwnv2wvmw06.png",
    },
  ]);

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
        <BooksList books={books} />
      </div>
    </div>
  );
}

export default Books;
