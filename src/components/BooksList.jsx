import BookItem from "./BookItem";

function BooksList({ books }) {
  return (
    <div className="booksList">
      {books.map((b) => (
        <BookItem key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BooksList;
