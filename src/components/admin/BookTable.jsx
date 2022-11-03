import { shortenAuthorName } from "../../utils/utils";
import { ImBin } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import axios from "axios";
import Modal from "../UI/modal/Modal";
import { useState } from "react";
import CreateBook from "./createModals/CreateBook";

function BookTable({ table, setTable, ...props }) {
  const [addModal, setAddModal] = useState(false);

  const deleteBook = (id) => {
    if (!window.confirm("Удалить книгу из базы данных?")) return;

    axios({
      method: "delete",
      url: "/admin/books/delete/1234",
      data: { book_id: id },
    }).then((result) => {
      if (result.data === "ok") {
        console.log(`Книга под номером ${id} удалена`);
        setTable();
      }
    });
  };

  if (!table.length) return <h1>Нет данных</h1>;

  return (
    <div className="admin__bookTable">
      <div className="buttons">
        <button onClick={() => setAddModal(true)}>
          <MdAdd />
          Добавить
        </button>
      </div>
      {table.map((row) => (
        <div key={row.id} className="table__row">
          <div className="row__content">
            <div className="title">
              {row.id}. {row.title}
              <img src={row.url} alt="ERROR" width={50} />
            </div>
            <div className="info">
              <p>
                Автор: <span>{shortenAuthorName(row.author)}</span>
              </p>
              <p>
                Год издания: <span>{row.release_year}</span>
              </p>
              <p>
                Страниц: <span>{row.pages}</span>
              </p>
            </div>
            <div className="info" style={{ flexGrow: "0", width: "150px" }}>
              <p>
                Всего: <span>{row.amount}</span>
              </p>
              <p>
                Доступно: <span>{row.avalible_amount}</span>
              </p>
              <p>
                Заказов: <span>{row.total_orders}</span>
              </p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => deleteBook(row.id)}>
              <ImBin />
              Удалить
            </button>
          </div>
        </div>
      ))}
      <Modal modal={addModal} setModal={setAddModal}>
        <CreateBook setModal={setAddModal} />
      </Modal>
    </div>
  );
}

export default BookTable;
