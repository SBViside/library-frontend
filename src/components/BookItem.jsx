import Button from "./UI/button/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function BookItem({ book, logined, ...props }) {
  const navigator = useNavigate();

  return (
    <div className="bookItem" {...props}>
      <div
        className="bookItem__image"
        style={{ backgroundImage: `url('${book.url}')` }}
      ></div>
      <div className="bookItem__info">
        <h2 className="bookItem__title">{book.title}</h2>
        <h3 className="bookItem__author">
          {book.author} / {book.release_year}
        </h3>
        <h3
          className={
            "bookItem__avalible " + (book.avalible_amount ? "green" : "gray")
          }
        >
          {book.avalible_amount ? (
            <>
              <AiOutlineCheckCircle />
              Доступно: {book.avalible_amount}
            </>
          ) : (
            `Нет в наличии`
          )}
        </h3>
        <div className="bookItem__description">{book.description}</div>
      </div>
      <div className="bookItem__buttons">
        <Button
          onClick={(e) => {
            if (!logined.email) {
              navigator("/login");
              return;
            } else {
              //   navigator(`/book/${book.id}`);
            }
          }}
        >
          Оформить
        </Button>
        <Button
          onClick={(e) => {
            if (!logined.email) {
              navigator("/login");
              return;
            } else {
              //   navigator(`/book/${book.id}`);
            }
          }}
        >
          Подробнее
        </Button>
      </div>
      <div className="book__underline"></div>
    </div>
  );
}

export default BookItem;
