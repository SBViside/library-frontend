import { useNavigate } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { getDateFromSQLString } from "../utils/utils";

function Status({ order }) {
  if (order.issue_date && !order.actual_date) {
    return (
      <p className="status" style={{ color: "brown" }}>
        У клиента с {getDateFromSQLString(order.issue_date.slice(0, 10))}
      </p>
    );
  } else if (order.actual_date) {
    return (
      <p className="status" style={{ color: "green" }}>
        Возвращена ({getDateFromSQLString(order.actual_date.slice(0, 10))})
      </p>
    );
  } else {
    return (
      <p className="status">
        <BiTimeFive />
        Ожидает клиента
      </p>
    );
  }
}

function OrderItem({ order, cancelTheOrder, ...props }) {
  const navigator = useNavigate();

  return (
    <div
      key={order.id}
      className="orders__item"
      {...props}
      onClick={() => navigator(`/books/${order.book_id}`)}
    >
      <h1>{order.title}</h1>
      {/* <img src={order.url} alt="ERROR" width={80} /> */}
      <p>
        Дата оформления: {getDateFromSQLString(order.start_date.slice(0, 10))}
      </p>
      <p>
        Ожидаемая дата возврата:{" "}
        {getDateFromSQLString(order.expected_date.slice(0, 10))}
      </p>
      <Status order={order} />
      {!order.issue_date && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            cancelTheOrder(order);
          }}
        >
          Отменить
        </button>
      )}
      <div className="line"></div>
    </div>
  );
}

export default OrderItem;
