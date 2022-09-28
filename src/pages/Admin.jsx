import "../styles/Admin.scss";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function Admin() {
  const [verification, setVerification] = useState(true);

  const [tables, setTables] = useState([]);
  const [currentTableName, setCurrentTableName] = useState("");
  const [currentTable, setCurrentTable] = useState([]);

  const [tablesLoading, getTables, tablesError] = useFetch(async () => {
    const response = await axios.get("/db/tables");
    const data = response.data;
    setTables(data);
    setCurrentTableName(data[0].table_name);
  });

  const [currentTableLoading, getCurrentTable, currentTableError] = useFetch(
    async () => {
      const response = await axios.get(`/db/tables/${currentTableName}`);
      setCurrentTable(response.data);
    }
  );

  useEffect(() => {
    getTables();
  }, []);

  useEffect(() => {
    getCurrentTable();
  }, [tables, currentTableName]);

  return (
    <div className="admin container">
      {verification ? (
        <>
          <h1 className="caption">Редактор базы данных</h1>
          <div className="admin__content">
            <div className="admin__tabs">
              {tablesLoading ? (
                <h2>Загрузка таблиц...</h2>
              ) : (
                tables.map((t) => (
                  <div key={t.table_name} className="admin__tab">
                    <input
                      type="radio"
                      name="table"
                      id={t.table_name}
                      checked={currentTableName === t.table_name}
                      onChange={(e) => setCurrentTableName(e.target.id)}
                    />
                    <label htmlFor={t.table_name}>{t.table_name}</label>
                  </div>
                ))
              )}
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
