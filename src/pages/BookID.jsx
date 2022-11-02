import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import BookController from "../controller/BookController";
import Loader from "../components/UI/loader/Loader";
import { MdOutlineLibraryAdd, MdOutlineZoomOutMap } from "react-icons/md";
import Modal from "../components/UI/modal/Modal";
import { useNavigate } from "react-router-dom";
import OrdersCard from "../components/OrdersCard";
import ConfirmTheOrder from "../components/ConfirmTheOrder";

function BookID() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [modalView, setModalView] = useState(false);
  const [modalOrder, setModalOrder] = useState(false);

  const [book, setBook] = useState({});
  const [genres, setGenres] = useState([]);

  const [bookLoading, getBook, bookError] = useFetch(async () => {
    const [bookData, genres] = await BookController.getBookByID(id);
    setBook(bookData);
    setGenres(genres);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    getBook();
  }, [id]);

  return (
    <div className="bookID container">
      {bookLoading ? (
        <Loader style={{ margin: "0 auto" }} />
      ) : (
        <>
          <div className="bookID__content">
            <div className="bookID__image" onClick={() => setModalView(true)}>
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
                <span
                  onClick={() => navigate(`/books/author/${book.author_id}`)}
                >
                  {book.author}
                </span>
                , {book.release_year}
              </p>
              {book.avalible_amount > 0 ? (
                <button id="makeOrder" onClick={() => setModalOrder(true)}>
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
                  Всего заказывали книгу: <span>{book.total_orders}</span>
                </p>
              </div>
            </div>
            <Modal modal={modalView} setModal={setModalView}>
              <div className="modal_img">
                <img src={book.url} alt="ERROR" />
              </div>
            </Modal>
            <Modal modal={modalOrder} setModal={setModalOrder}>
              <ConfirmTheOrder book_id={id} />
            </Modal>
          </div>
          <OrdersCard rerender={() => this.render()} />
        </>
      )}
    </div>
  );
}

export default BookID;
