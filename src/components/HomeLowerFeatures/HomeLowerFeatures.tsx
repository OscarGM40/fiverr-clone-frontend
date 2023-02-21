import React from "react";
import "./HomeLowerFeatures.scss";

const HomeLowerFeatures = () => {
  const options = [
    "Connect to freelancers with proven business experience",
    "Get matched with the perfect talent by a customer success manager",
    " Manage teamwork and boost productivity with one powerful workspace",
  ];
  return (
    <div className="lower-features">
      <div className="container">
        {/* left col */}
        <div className="item">
          <>
            <h1>fiver business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits, dedicated to
              businesses
            </p>
          </>
          {[1, 2, 3].map((_, i) => (
            <React.Fragment key={i}>
              <div className="title">
                <img src="./img/check.png" alt="" />
                {options[i]}
              </div>
            </React.Fragment>
          ))}
          <button>Explore Liverr Business</button>
        </div>
        {/* right col */}
        <div className="item">
          <img
          className="right-img"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default HomeLowerFeatures;
