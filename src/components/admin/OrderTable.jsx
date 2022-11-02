function OrderTable({ table, ...props }) {
  if (!table.length) return <h1>Нет данных</h1>;

  return (
    <div className="admin__orderTable">
      {table.map((row) => (
        <div key={row.id} className="table__row">
          {/* {Object.keys(row).map((k) => (
            <div key={k} className="table__column">
              {k === "url" ? (
                <img src={row[`${k}`]} width={25} alt="ERROR" />
              ) : (
                row[`${k}`]
              )}
            </div>
          ))} */}
        </div>
      ))}
    </div>
  );
}

export default OrderTable;
