import { shortenAuthorName } from "../../utils/utils";
import { ImBin } from "react-icons/im";
import { MdAdd } from "react-icons/md";

function BookTable({ table, ...props }) {
  if (!table.length) return <h1>Нет данных</h1>;

  return (
    <div className="admin__bookTable">
      <div className="buttons">
        <button>
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
            <button>
              <ImBin />
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookTable;
