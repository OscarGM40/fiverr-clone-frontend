import Slider from "infinite-react-carousel";
import "./Slide.scss";

interface SlideProps {
  slidesToShow: number;
  arrowsScroll: number;
  children: React.ReactNode;
  arrowsCentered: boolean
}
const Slide = ({ children, arrowsScroll, slidesToShow,arrowsCentered }: SlideProps) => {
  return (
    <div className="slide">
      <div className={`${arrowsCentered ? "container":"container off-centered"}`}>
        <Slider  slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
