import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User.type";
import { makeRequest } from "../../utils/makeRequest";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const isscrolledDown = () => {
    setScrolledDown(window.scrollY > 0);
  };

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isscrolledDown);

    return () => window.removeEventListener("scroll", isscrolledDown);
  }, []);

  let currentUser: IUser | undefined = undefined;
  const rawUser = localStorage.getItem("currentUser");

  if (rawUser) {
    currentUser = JSON.parse(rawUser);
  }

  const handleLogout = async () => {
    try {
      const resp = await makeRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");
      currentUser = undefined;
      if (resp.data.ok) {
        navigate("/");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err?.response) {
          console.log(err.response.data.message);
        }
      }
    }
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
          <Link to="/login" className="link">
            <span>Sign in</span>
          </Link>
          {/* si no es seller */}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {/* si no hay nadie logeado */}
          {!currentUser && (
            <Link to="/register" className="link">
              <button>Join</button>
            </Link>
          )}
          {/* si hay un user */}
          {currentUser && (
            <div className="user" onClick={() => setOpenOptions(!openOptions)}>
              <img src={currentUser.img || "img/NoAvatar.jpg"} alt="" />
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
                  <Link className="link" to="/" onClick={handleLogout}>
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
