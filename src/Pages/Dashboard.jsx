import { useState } from "react";
import { AllUserDetails } from "../Data/Store.js";

const Dashboard = () => {
  // let styler = true;

  if (AllUserDetails.length !== 0) {
    let lastReg = AllUserDetails[AllUserDetails.length - 1];
    lastReg.active = true;
  }

  const [actvclss, setactvclss] = useState(null);

  const mapper = [
    { semester: ["longitude", "latitude"] },
    { semester: ["voodoo", "john"] },
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <div className="col_2">
          <div className="output_list">
            <table>
              <thead>
                <tr>
                  <th>Session Title</th>
                  <th>Semester Title</th>
                  <th>Is Active</th>
                </tr>
              </thead>

              {AllUserDetails.map((userD, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{userD.sessionTitle}</td>
                      <td>Semester {userD.semester}</td>
                      <td
                        onClick={() => {
                          setactvclss(userD.semester);
                        }}>
                        <span
                          id={index}
                          className={
                            userD.active ? "active" : "notactive"
                          }></span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="courses">
            <div className="courses_box">
              <h3 className="heading">Courses</h3>
              <ul className="course_lists">
                {mapper[actvclss -1] &&
                  mapper[actvclss -1].semester.map((each, index) => {
                    return (
                      <li key={index}>
                        <h4>
                          {each} - {index}
                        </h4>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
