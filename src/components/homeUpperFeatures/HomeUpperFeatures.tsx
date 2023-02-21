import React from "react";
import './HomeUpperFeatures.scss'

const HomeUpperFeatures = () => {
  return (
    <div className="upper-features">
      <div className="container">
        {/* left col */}
        <div className="item">
          <h1>A whole world of freelance talent at your fingertips</h1>
          {[1, 2, 3, 4].map((_, i) => (
            <React.Fragment key={i}>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates, just project-based
                pricing.
              </p>
            </React.Fragment>
          ))}
        </div>
        {/* right col */}
        <div className="item">
          <video src="./videos/star-wars.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};
export default HomeUpperFeatures;
