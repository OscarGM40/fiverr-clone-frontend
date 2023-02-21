import { footerData } from "../../data/footer-data";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {Object.entries(footerData).map(([cat, values]) => (
            <div className="item" key={cat}>
              <h2>{cat}</h2>
              {values.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
