import React from "react";
import "./download.css";

const Download = () => {
  return (
    <>
      <section className="download top">
        <div className="container flex_space">
          <div className="row">
            <div className="report">
              <div className="icons">
                <i className="fas fa-book-reader"></i>
              </div>
              <div className="text">
                <h4>Students</h4>
                <br />
                <p>534</p>
              </div>
            </div>
            <div className="report">
              <div className="icons">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="text">
                <h4>Teaching Staff</h4>
                <br />
                <p>65</p>
              </div>
            </div>
            <div className="report">
              <div className="icons">
                <i className="fas fa-clipboard"></i>
              </div>
              <div className="text">
                <h4>Teaching Assistants</h4>
                <br />
                <p>17</p>
              </div>
            </div>
            <div className="report">
              <div className="icons">
                <i className="fas fa-university"></i>
              </div>
              <div className="text">
                <h4>Countries represented at UWIS</h4>
                <br />
                <p>20+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
