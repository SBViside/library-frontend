import { useContext } from "react";
import { loginContext } from "../context/loginContext";
import Loader from "./UI/loader/Loader";
import { useNavigate } from "react-router-dom";

function AuthorList({ authorsLoading, authors }) {
  const navigator = useNavigate();
  const { logined } = useContext(loginContext);

  if (!authorsLoading && authors.length < 1) {
    return <h1 className="books__notFound">Авторов не найдено...</h1>;
  }

  const gotoBook = (id) => {
    if (logined.email) {
      navigator(`/books/author/${id}`);
    } else {
      navigator(`/login`);
    }
  };

  return authorsLoading ? (
    <Loader />
  ) : (
    <div className="authors__list">
      {authors.map((a) => (
        <div key={a.id} className="authors__item">
          <div
            onClick={() => gotoBook(a.id)}
            className="authors__image"
            style={{ backgroundImage: `url('${a.url}')` }}
          ></div>
          <div className="authors__info">
            <h2 className="authors__name" onClick={() => gotoBook(a.id)}>
              {a.name}
            </h2>
            <p className="authors__description">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorList;
