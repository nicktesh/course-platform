import React from "react";
import Searchbar from "../components/Searchbar";
import courseimg1 from "../assets/course-img1.jpg";
import courseimg2 from "../assets/course-img2.jpg";
import courseicon1 from "../assets/settings-icon.svg";

function Home() {
  return (
    <div className="courses">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Searchbar />
          </div>
          <div className="col-12">
            <h1>Welcome, Nicholas</h1>
          </div>
          <div className="col-12">
            <div className="courses-btns">
              <button className="btn-primary">
                <p>All courses</p>
              </button>
              <button className="btn-alt">
                <p>My courses</p>
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="continue-header">
              <h3>Continue course</h3>
              <a>See all</a>
            </div>
          </div>
          <div className="col-6">
            <a href="#">
              <div className="active-course">
                <div className="course-info">
                  <div className="course-tag">
                    <p>App Development</p>
                  </div>
                  <h4>
                    Foundations of Mobile App Development: Building an App with
                    React Native
                  </h4>
                  <div className="progress-mobile">
                    <div
                      className="progress-bar width1"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar width1"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <img src={courseimg1} alt="Course One" />
              </div>
            </a>
          </div>
          <div className="col-6">
            <a href="#">
              <div className="active-course">
                <div className="course-info">
                  <div className="course-tag">
                    <p>UI Design</p>
                  </div>
                  <h4>
                    User Experience Essentials: Principles + Practice for Great
                    UI Design
                  </h4>
                  <div className="progress-mobile">
                    <div
                      className="progress-bar width2"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar width2"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <img src={courseimg2} alt="Course Two" />
              </div>
            </a>
          </div>
          <div className="col-12">
            <div className="intro-header">
              <h3>Featured courses</h3>
              <a>See all</a>
            </div>
          </div>
          <div className="col-3">
            <a href="#">
              <div className="featured-course pink">
                <div className="course-info">
                  <h4>UX Design Masterclass for beginners</h4>
                  <div className="course-bottom">
                    <div className="total-lessons">
                      <i>X</i>
                      <p>15 lessons</p>
                    </div>
                    <img src={courseicon1} alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <div className="featured-course blue">
                <div className="course-info">
                  <h4>How to create a mobile app from scratch</h4>
                  <div className="course-bottom">
                    <div className="total-lessons">
                      <i>X</i>
                      <p>10 lessons</p>
                    </div>
                    <img src={courseicon1} alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <div className="featured-course yellow">
                <div className="course-info">
                  <h4>Autolayouts - How, When, and Why</h4>
                  <div className="course-bottom">
                    <div className="total-lessons">
                      <i>X</i>
                      <p>12 lessons</p>
                    </div>
                    <img src={courseicon1} alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <div className="featured-course green">
                <div className="course-info">
                  <h4>Create a design system from the beginning</h4>
                  <div className="course-bottom">
                    <div className="total-lessons">
                      <i>X</i>
                      <p>20 lessons</p>
                    </div>
                    <img src={courseicon1} alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12">
            <div className="intro-header">
              <h3>Top React courses</h3>
              <a>See all</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
