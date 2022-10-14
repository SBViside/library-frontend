import { memo } from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__contacts">
          <div className="contacts__address">
            <p>РУП «Минскэнерго»</p>
            <p>220033, г. Минск, ул. Аранская, 24</p>
          </div>
          <div className="contacts__other">
            <p>Fax: (+375 44) 225-41-10</p>
            <p>E-mail: main_office@menergo.by</p>
            <p style={{ marginTop: "10px" }}>Телефон горячей линии:</p>
            <p>(+375 44) 225-41-10</p>
            <p style={{ marginTop: "10px" }}>Пн, Ср, Пт с 13.00 до 17.00</p>
            <p>Вт, Чт с 8.00 до 12.00</p>
          </div>
          <div className="contacts__bank">
            <p>р/с BY55AKVB30131200173550050000</p>
            <p>ОАО «АСБ Беларусбанк»</p>
            <p>БИК AKVB BY1X </p>
          </div>
        </div>
        <div className="footer__end">© РУП «Минскэнерго» 2022, MADE BY SBV</div>
      </div>
    </footer>
  );
}

export default memo(Footer);
