import { useNavigate } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { BsCheck2Circle } from "react-icons/bs";
import { getDateFromSQLString } from "../utils/utils";

function Status({ order }) {
  if (order.issue_date && !order.actual_date) {
    return (
      <p className="status" style={{ color: "brown" }}>
        <GrUserExpert className="client" />У клиента с{" "}
        {getDateFromSQLString(order.issue_date.slice(0, 10))}
      </p>
    );
  } else if (order.actual_date) {
    return (
      <p className="status" style={{ color: "#3CB371" }}>
        <BsCheck2Circle className="ready" />
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
      className={"orders__item" + (order.actual_date ? " completed" : "")}
      {...props}
      onClick={() => navigator(`/books/${order.book_id}`)}
    >
      <h1>{order.title}</h1>
      {/* <img src={order.url} alt="ERROR" width={80} /> */}
      <p>
        Период проката:{" "}
        <span style={{ fontStyle: "italic", fontWeight: "700" }}>
          {getDateFromSQLString(order.start_date.slice(0, 10))}-
          {getDateFromSQLString(order.expected_date.slice(0, 10))}
        </span>
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
      <div
        className="line"
        style={{
          backgroundColor:
            order.issue_date && !order.actual_date
              ? "brown"
              : order.actual_date
              ? "#3CB371"
              : "orange",
        }}
      ></div>
    </div>
  );
}

export default OrderItem;
