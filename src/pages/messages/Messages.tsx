import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  // fijate que con template strings puedo usar lorem con emmet
  const message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis porro quibusdam impedit ex repellendus delectus molestias, minus facilis optio modi commodi, a exercitationem nihil omnis! Officia at nisi possimus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veritatis porro quibusdam impedit ex repellendus delectus molestias, minus facilis optio modi commodi, a exercitationem nihil omnis! Officia at nisi possimus.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            {/* delete/change around tag para borrar toda la tag(inner para el contenido) */}
            <td>John Doe</td>
            <td className="message">
              <Link to="/message/123" className="link">{message}</Link>
            </td>
            <td>1 day ago</td>
            <td>
              {/* ojo que es read/read/read */}
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td className="message">
              <Link to="/message/123" className="link">{message}</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td className="message">
              <Link to="/message/123" className="link">{message}</Link>
            </td>
            <td>1 day ago</td>
            <td>{/* <button>Mark as Read</button> */}</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td className="message">
              <Link to="/message/123" className="link">{message}</Link>
            </td>
            <td>1 day ago</td>
            <td>{/* <button>Mark as Read</button> */}</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td className="message">
              <Link to="/message/123" className="link">{message}</Link>
            </td>
            <td>1 day ago</td>
            <td>{/* <button>Mark as Read</button> */}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Messages;
