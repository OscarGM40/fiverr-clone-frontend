import { Link } from "react-router-dom";
import { IGig } from "../../data/data";
import "./GigCard.scss";

interface GigCardProps {
  gig: IGig;
}
const GigCard = ({ gig }: GigCardProps) => {
  return (
    <Link to={`/gig/123`} className="link">
      <div className="gigCard">
        <img src={gig.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gig.pp} alt="" />
            <span>{gig.username}</span>
          </div>
          <p className="desc">{gig.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="star" />
            <span>{gig.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="like" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${gig.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default GigCard;
