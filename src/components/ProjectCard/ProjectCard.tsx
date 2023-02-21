import { Link } from "react-router-dom";
import { IProject } from "../../data/data";
import './ProjectCard.scss'

interface ProjectCardProps {
  item: IProject;
}
const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Link to="/gigs?cat=project" className="link">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2 className="category">{item.cat}</h2>
            <span className="username">{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
