import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const isscrolledDown = () => {
    setScrolledDown(window.scrollY > 0);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isscrolledDown);

    return () => window.removeEventListener("scroll", isscrolledDown);
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className={scrolledDown || pathname !== "/" ? "navbar scrolledDown" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpenOptions(!openOptions)}>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/07/13/39/monkey-7774171_640.jpg"
                alt=""
              />
              <span>{currentUser.username}</span>
              {openOptions && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {scrolledDown ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        ))}
    </div>
  );
};
export default Navbar;
