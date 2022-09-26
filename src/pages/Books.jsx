import { useState } from "react";
import BooksList from "../components/BooksList";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      author: "Е А Охватюк",
      name: "Мое название",
      release_date: new Date(),
      description: "Описание для первой книги Охватюка Е А",
      pages: 120,
      weight: 309,
      total_amount: 7,
      avalible_amount: 6,
      total_orders: 0,
      url: "https://purepng.com/public/uploads/large/purepng.com-booksbookillustratedwrittenprintedliteratureclipart-1421526451707uyace.png",
    },
    {
      id: 2,
      author: "Е А Охватюк",
      name: "Вторая книга",
      release_date: new Date(),
      description: "Описание для второй книги Охватюка Е А",
      pages: 210,
      weight: 340,
      total_amount: 3,
      avalible_amount: 3,
      total_orders: 2,
      url: "https://purepng.com/public/uploads/large/purepng.com-booksbookillustratedwrittenprintedliteratureclipart-1421526451707uyace.png",
    },
    {
      id: 3,
      author: "Е А Охватюк",
      name: "Финал",
      release_date: new Date(),
      description: "Описание для финала книги Охватюка Е А",
      pages: 306,
      weight: 500,
      total_amount: 10,
      avalible_amount: 8,
      total_orders: 12,
      url: "https://purepng.com/public/uploads/large/purepng.com-booksbookillustratedwrittenprintedliteratureclipart-1421526451707uyace.png",
    },
  ]);

  return (
    <div className="books container">
      <h1 className="caption">Книги</h1>
      <BooksList books={books} />
    </div>
  );
}

export default Books;
