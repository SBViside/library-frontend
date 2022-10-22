import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BookController from "../controller/BookController";
import Loader from "../components/UI/loader/Loader";

function BookID() {
  const { id } = useParams();

  const [book, setBook] = useState({});
  const [genres, setGenres] = useState([]);

  const [bookLoading, getBook, bookError] = useFetch(async () => {
    const [bookData, genres] = await BookController.getBookByID(id);
    setBook(bookData);
    setGenres(genres);
    console.log(bookData);
  });

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="bookID container">
      {bookLoading ? (
        <Loader />
      ) : (
        <div
          style={{ paddingTop: "30px", display: "flex", alignItems: "start" }}
        >
          <img src={book.url} alt="ERROR" width={300} />
          <h1 className="caption">
            {book.title} (ID: {id})
          </h1>
        </div>
      )}
    </div>
  );
}

export default BookID;
