import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BookController from "../controller/BookController";
import Loader from "../components/UI/loader/Loader";
import { MdOutlineLibraryAdd, MdOutlineZoomOutMap } from "react-icons/md";
import Modal from "../components/UI/modal/Modal";
import { useNavigate } from "react-router-dom";

function BookID() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const { id } = useParams();

  const [modal, setModal] = useState(false);

  const [book, setBook] = useState({});
  const [genres, setGenres] = useState([]);

  const [bookLoading, getBook, bookError] = useFetch(async () => {
    const [bookData, genres] = await BookController.getBookByID(id);
    setBook(bookData);
    setGenres(genres);
  });

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="bookID container">
      {bookLoading ? (
        <Loader style={{ margin: "0 auto" }} />
      ) : (
        <div className="bookID__content">
          <div className="bookID__image" onClick={() => setModal(true)}>
            <img src={book.url} alt="ERROR" />
            <div className="fade">
              <MdOutlineZoomOutMap />
            </div>
          </div>
          <div className="bookID__about">
            <h1 className="title">
              {book.title} <span className="number">№{book.id}</span>
            </h1>
            <p className="author">
              <span onClick={() => navigate(`/books/author/${book.author_id}`)}>
                {book.author}
              </span>
              , {book.release_year}
            </p>
            {book.avalible_amount > 0 ? (
              <button id="makeOrder">
                <MdOutlineLibraryAdd />
                Заказать
                <span style={{ color: "#8eff8c" }}>
                  (В наличии: {book.avalible_amount})
                </span>
              </button>
            ) : (
              <h1 className="outOfStock">Нет в наличии</h1>
            )}

            <div className="information">
              <p>
                Дата выхода: <span>{book.release_year} год</span>
              </p>
              <p>
                Количество страниц: <span>{book.pages}</span>
              </p>
              <p>
                Жанры:{" "}
                {genres.map((g, i) => (
                  <span key={g.name}>
                    {g.name}
                    {i + 1 === genres.length ? "" : ", "}
                  </span>
                ))}
              </p>
            </div>

            <div className="information">
              <h1>Описание</h1>
              <p style={{ textAlign: "justify" }}>{book.description}</p>
            </div>

            <div className="information">
              <p>
                Всего заказов: <span>{book.total_orders}</span>
              </p>
            </div>
          </div>
          <Modal modal={modal} setModal={setModal}>
            <div className="modal_img">
              <img src={book.url} alt="ERROR" />
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default BookID;
