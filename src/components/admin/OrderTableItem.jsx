import { ImBin } from "react-icons/im";
import { GiConfirmed } from "react-icons/gi";
import { getDateFromSQLString } from "../../utils/utils";

function OrderTableItem({
  row,
  cancelTheOrder,
  confirmTheIssue,
  finishTheOrder,
  ...props
}) {
  function Status() {
    if (row.issue_date && !row.actual_date) {
      return (
        <p className="order__status">
          У клиента с {getDateFromSQLString(row.issue_date.slice(0, 10))}
        </p>
      );
    } else if (row.actual_date) {
      return (
        <p className="order__status">
          Возвращена ({getDateFromSQLString(row.actual_date.slice(0, 10))})
        </p>
      );
    } else {
      return <p className="order__status">Ожидает клиента</p>;
    }
  }

  return (
    <div
      className="table__row"
      style={{
        backgroundColor:
          row.issue_date && !row.actual_date
            ? "#ffdd8f"
            : row.actual_date
            ? "#8fff93"
            : "#8fe3ff",
      }}
      {...props}
    >
      <div className="row__content">
        <div className="order__info">
          <h2 className="order__customer">
            {row.id}. {row.customer}
          </h2>
          <h1 className="order__title">Книга: {row.title}</h1>
          <p>
            Период проката:{" "}
            <span style={{ fontStyle: "italic", fontWeight: "700" }}>
              {getDateFromSQLString(row.start_date.slice(0, 10))}-
              {getDateFromSQLString(row.expected_date.slice(0, 10))}
            </span>
          </p>
          <Status order={row} />
        </div>
        <div className="order__buttons">
          {row.issue_date && !row.actual_date ? (
            <button
              style={{ backgroundColor: "green" }}
              onClick={() => finishTheOrder(row)}
            >
              <GiConfirmed />
              Подтвердить возврат
            </button>
          ) : row.actual_date ? null : (
            <>
              <button
                style={{ backgroundColor: "orange" }}
                onClick={() => confirmTheIssue(row)}
              >
                Подтвердить выдачу
              </button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => cancelTheOrder(row)}
              >
                <ImBin />
                Отменить
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderTableItem;
