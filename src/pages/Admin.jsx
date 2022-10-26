import "../styles/Admin.scss";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function Admin() {
  window.scrollTo(0, 0);

  const [verification, setVerification] = useState(true);

  const [tables, setTables] = useState([
    { id: 1, name: "заказы" },
    { id: 2, name: "книги" },
    { id: 3, name: "авторы" },
    { id: 4, name: "жанры" },
    { id: 5, name: "пользователи" },
  ]);
  const [index, setIndex] = useState(tables[0].id);
  const [database, setDatabase] = useState([]);

  //   const [tables, setTables] = useState([]);
  //   const [currentTableName, setCurrentTableName] = useState("");
  //   const [currentTable, setCurrentTable] = useState([]);

  //   const [tablesLoading, getTables, tablesError] = useFetch(async () => {
  //     const response = await axios.get("/db/tables");
  //     const data = response.data;
  //     setTables(data);
  //     setCurrentTableName(data[0].table_name);
  //   });

  //   const [currentTableLoading, getCurrentTable, currentTableError] = useFetch(
  //     async () => {
  //       const response = await axios.get(`/db/tables/${currentTableName}`);
  //       setCurrentTable(response.data);
  //     }
  //   );

  //   useEffect(() => {
  //     getTables();
  //   }, []);

  //   useEffect(() => {
  //     getCurrentTable();
  //   }, [tables, currentTableName]);

  return (
    <div className="admin container">
      {verification ? (
        <>
          <h1 className="caption">Редактор базы данных</h1>
          <div className="admin__content">
            <div className="admin__tabs">
              {tables.map((t) => (
                <div key={t.id} className="admin__tab">
                  <input
                    type="radio"
                    name="table"
                    id={t.name}
                    checked={t.id === index}
                    onChange={(e) => setIndex(t.id)}
                  />
                  <label htmlFor={t.name}>{t.name}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1 className="caption">Вы не авторизированы</h1>
      )}
    </div>
  );
}

export default Admin;
