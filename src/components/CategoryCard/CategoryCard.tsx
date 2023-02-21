import './CategoryCard.scss'
import { Link } from "react-router-dom";
import { CategoryCard } from "../../data/data";

interface CatCardProps {
  item: CategoryCard;
}
const CategoryCard = ({ item }: CatCardProps) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <div className="container">
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;
