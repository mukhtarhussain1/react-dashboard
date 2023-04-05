import React from "react";
import "./HomePage.scss";

import Button from "../Button/Button";
import ButtonGradient from "../ButtonGradient/ButtonGradient";
import Collapes from "../Collapes/Collapes";

import videoIcon from "../../Assets/video-icon.png";
import image from "../../Assets/img.png";
import Sidebar from "../Sidebar/Sidebar";
import RighSideBar from "../RighSideBar/RighSideBar";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-left-side">
          <Sidebar />

          <div className="home-main">
            <h2>Client management</h2>

            <div className="buttons">
              <Button title="Work history" />
              <Button title="Vital info" />
              <ButtonGradient title="Check-ins" />
              <Button title="Food diary" />
            </div>

            <div>
              <h4>Filter check-ins</h4>
              <div className="forms-container">
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
              </div>
            </div>

            <div className="collaps-container">
              <Collapes date="12 Nov, 2023" status="Checked-in" />
              <Collapes date="11 Nov, 2023" status="Missed" color="red" />
              <Collapes date="10 Nov, 2023" status="Checked-in" />
              <div className="collaps-container">
                <div className="collapsd-inner">
                  <div className="collapsd-left-side">
                    <h4>A - Fast-paced walking</h4>
                    <div className="collapsd-table">
                      <div>
                        <p className="textMuted">Sets</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                      </div>
                      <div>
                        <p className="textMuted">Reps</p>
                        <p>12</p>
                        <p>8</p>
                        <p>6</p>
                      </div>
                      <div>
                        <p className="textMuted">Lb</p>
                        <p>-</p>
                        <p>-</p>
                        <p>-</p>
                      </div>
                    </div>
                  </div>
                  <div className="collapsd-right-side">
                    <div className="video-title">
                      <img alt="img" src={videoIcon} />
                      <h5 className="gradientText">Submitted video</h5>
                    </div>
                    <div className="images-container">
                      <img alt="img" src={image} />
                      <img alt="img" src={image} />
                    </div>
                  </div>
                </div>
                <div className="collapsd-inner">
                  <div className="collapsd-left-side">
                    <h4>A - Fast-paced walking</h4>
                    <div className="collapsd-table">
                      <div>
                        <p className="textMuted">Sets</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                      </div>
                      <div>
                        <p className="textMuted">Reps</p>
                        <p>12</p>
                        <p>8</p>
                        <p>6</p>
                      </div>
                      <div>
                        <p className="textMuted">Lb</p>
                        <p>-</p>
                        <p>-</p>
                        <p>-</p>
                      </div>
                    </div>
                  </div>
                  <div className="collapsd-right-side">
                    <div className="video-title">
                      <img alt="img" src={videoIcon} />
                      <h5 className="gradientText">Submitted video</h5>
                    </div>
                    <div className="images-container"></div>
                  </div>
                </div>
              </div>
              <Collapes date="9 Nov, 2023" status="Checked-in" />
            </div>

            <Footer />
          </div>
        </div>
        <RighSideBar />
      </div>
    </>
  );
};

export default HomePage;
