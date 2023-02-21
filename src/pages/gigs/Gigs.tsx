import { useState } from "react";
import "./Gigs.scss";
import { gigsMock } from "../../data/data";
import GigCard from "../../components/gigCard/GigCard";

const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sort, setSort] = useState<"sales" | "createdAt">("sales");

  const reSort = (type: "sales" | "createdAt") => {
    setSort(type);
    setOpenMenu(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">{`FIVERR > GRAPHICS & DESIGN >`}</span>
        <h1>AI Artists</h1>
        <p>{`Explore the boundaries of art and technology with Fiverr's AI artists`}</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img
              className={openMenu ? "up" : "down"}
              src="./img/down.png"
              alt="anything"
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest </span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigsMock.map((gig) => (
            <GigCard gig={gig} key={gig.id} />
          ))}
        </div>
        
      </div>
    </div>
  );
};
export default Gigs;
