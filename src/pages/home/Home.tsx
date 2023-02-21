import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Featured from "../../components/featured/Featured";
import HomeLowerFeatures from "../../components/HomeLowerFeatures/HomeLowerFeatures";
import HomeUpperFeatures from "../../components/homeUpperFeatures/HomeUpperFeatures";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards, projects } from "../../data/data";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5} arrowsCentered>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <HomeUpperFeatures />
      <HomeLowerFeatures />
      <Slide slidesToShow={4} arrowsScroll={4} arrowsCentered={false}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};
export default Home;
