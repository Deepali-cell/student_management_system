import React, { useContext } from "react";
import { StateContext } from "../context/stateContext";

const Distribution = () => {
  const { counts, percent } = useContext(StateContext);
  const webdev_percentage = percent(counts.webDev);
  const mobiledev_percentage = percent(counts.mobileDev);
  const datascience_percentage = percent(counts.dataScience);
  const uiux_percentage = percent(counts.ui_ux);

  return (
    <div id="distribution_box" className="box">
      <h3 className="heading">
        <i className="fa-solid fa-chart-line"></i> Course Distribution
      </h3>
      <hr />

      <div id="progress_data">
        <div>
          <div className="course_subline">
            <h6>Web Development</h6>
            <p id="web_dev_students_counts">{counts.webDev} Students</p>
          </div>

          <div className="progress" role="progressbar">
            <div
              className="progress-bar bg-primary"
              id="webdev_progress_bar"
              style={{ width: `${webdev_percentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="course_subline">
            <h6>Data Science</h6>
            <p id="data_science_students_counts">
              {counts.dataScience} Students
            </p>
          </div>

          <div className="progress" role="progressbar">
            <div
              className="progress-bar bg-success"
              id="datascience_progress_bar"
              style={{ width: `${datascience_percentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="course_subline">
            <h6>Mobile Development</h6>
            <p id="mobile_dev_students_counts">{counts.mobileDev} Students</p>
          </div>

          <div className="progress" role="progressbar">
            <div
              className="progress-bar bg-warning"
              id="mobiledev_progress_bar"
              style={{ width: `${mobiledev_percentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="course_subline">
            <h6>UI/UX Design</h6>
            <p id="ui_ux_students_counts">{counts.ui_ux} Students</p>
          </div>

          <div className="progress" role="progressbar">
            <div
              className="progress-bar bg-danger"
              id="uiux_progress_bar"
              style={{ width: `${uiux_percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
