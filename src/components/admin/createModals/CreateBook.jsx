import CustomSelect from "../../UI/select/Select";
import Input from "../../UI/input/Input";
import DragAndDrop from "../../../hooks/DragAndDrop";
import { useState } from "react";

function CreateBook({ setModal, ...props }) {
  const [image, setImage] = useState(null);
  const [newBook, setNewBook] = useState({ file: null, title: "" });

  const sendBook = (e) => {
    console.log("NOT YET!");
    setModal(false);
  };

  return (
    <div className="createBook" {...props}>
      <h1 className="hder">Добавление книги</h1>
      <div className="addBook__content">
        <DragAndDrop file={image} setFile={setImage} />

        <div className="addBook__item">
          <span>Название:</span> <Input id="title" type="text" />
        </div>

        <CustomSelect
          //   ref={genreSelect}
          //   placeholder={genresLoading ? "Загрузка..." : "Автор"}
          //   options={
          //     genresLoading
          //       ? []
          //       : genres.map((g) => ({ value: g.id, label: g.name }))
          //   }
          //   onChange={(e) => {
          //     setFilter({ ...filter, genres: e.map((i) => i.value) });
          //   }}
          noOptionsMessage={() => "Доступных авторов нет"}
        />

        <div className="addBook__item">
          <span>Год издания:</span>{" "}
          <Input
            id="year"
            type="number"
            min="1"
            max={new Date().getFullYear()}
          />
        </div>

        <textarea id="desc" placeholder="Краткое описание книги"></textarea>

        <CustomSelect
          //   ref={genreSelect}
          //   placeholder={genresLoading ? "Загрузка..." : "Автор"}
          //   options={
          //     genresLoading
          //       ? []
          //       : genres.map((g) => ({ value: g.id, label: g.name }))
          //   }
          //   onChange={(e) => {
          //     setFilter({ ...filter, genres: e.map((i) => i.value) });
          //   }}
          noOptionsMessage={() => "Доступных жанров нет"}
        />

        <div className="addBook__item">
          <span>Кол-во страниц:</span>{" "}
          <Input
            id="pages"
            type="number"
            min="1"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="addBook__item">
          <span>Количество:</span>{" "}
          <Input
            id="amount"
            type="number"
            min="1"
            max={new Date().getFullYear()}
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
