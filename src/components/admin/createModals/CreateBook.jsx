import CustomSelect from "../../UI/select/Select";
import Input from "../../UI/input/Input";
import DragAndDrop from "../DragAndDrop";
import { useState } from "react";
import { CURR_YEAR } from "../../../utils/variables";
import { useEffect } from "react";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

function CreateBook({ setModal, ...props }) {
  const [image, setImage] = useState(null);
  const [newBook, setNewBook] = useState({
    title: "",
    author_id: null,
    year: CURR_YEAR,
    desc: "",
    genres_id: [],
    pages: "300",
    amount: "10",
  });

  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  const [selectsLoading, setSelects, selectsError] = useFetch(async () => {
    const authors = await axios.get("/db/authors/list");
    const genres = await axios.get("/db/genres");
    setAuthors(authors.data);
    setGenres(genres.data);
  });

  useEffect(() => {
    setSelects();
  }, []);

  const sendBook = (e) => {
    const formData = new FormData();

    formData.append("image", image);
    for (let key in newBook) {
      formData.append(key, newBook[key]);
    }

    axios.post("/admin/books/create/1234", formData).then((result) => {
      console.log(result);
    });

    setModal(false);
  };

  return (
    <div className="createBook" {...props}>
      <h1 className="hder">Добавление книги</h1>
      <div className="addBook__content">
        <DragAndDrop file={image} setFile={setImage} />

        <div className="addBook__item">
          <span>Название:</span>{" "}
          <Input
            id="title"
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            value={newBook.title}
            type="text"
          />
        </div>

        <CustomSelect
          placeholder={selectsLoading ? "Загрузка..." : "Автор"}
          options={authors.map((g) => ({ value: g.id, label: g.name }))}
          onChange={(e) => {
            setNewBook({ ...newBook, author_id: e.value });
          }}
          noOptionsMessage={() => "Доступных авторов нет"}
        />

        <div className="addBook__item">
          <span>Год издания:</span>{" "}
          <Input
            id="year"
            type="number"
            min="1"
            max={CURR_YEAR}
            onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
            value={newBook.year}
          />
        </div>

        <textarea
          id="desc"
          placeholder="Краткое описание книги"
          onChange={(e) => setNewBook({ ...newBook, desc: e.target.value })}
          value={newBook.desc}
        ></textarea>

        <CustomSelect
          isMulti
          placeholder={selectsLoading ? "Загрузка..." : "Жанры"}
          options={genres.map((g) => ({ value: g.id, label: g.name }))}
          onChange={(e) => {
            setNewBook({ ...newBook, genres_id: e.map((i) => i.value) });
          }}
          noOptionsMessage={() => "Доступных жанров нет"}
          maxMenuHeight={160}
        />

        <div className="addBook__item">
          <span>Кол-во страниц:</span>{" "}
          <Input
            id="pages"
            type="number"
            min="1"
            max={2000}
            onChange={(e) => setNewBook({ ...newBook, pages: e.target.value })}
            value={newBook.pages}
          />
        </div>

        <div className="addBook__item">
          <span>Количество:</span>{" "}
          <Input
            id="amount"
            type="number"
            min="1"
            max={1000}
            onChange={(e) => setNewBook({ ...newBook, amount: e.target.value })}
            value={newBook.amount}
          />
        </div>

        <button id="confirm" onClick={sendBook}>
          Подтвердить
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
