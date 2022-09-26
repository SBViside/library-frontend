import Button from "./UI/button/Button";

function BookItem({ book, ...props }) {
  return (
    <div className="bookItem" {...props}>
      <div
        className="bookItem__image"
        style={{ backgroundImage: `url('${book.url}')` }}
      ></div>
      <div className="bookItem__info">
        <h2 className="bookItem__name">{book.name}</h2>
        <h3 className="bookItem__author">{book.author}</h3>
      </div>
      <div className="bookItem__buttons">
        <Button>Оформить</Button>
        <Button>Подробно</Button>
      </div>
      <div className="book__underline"></div>
    </div>
  );
}

export default BookItem;
