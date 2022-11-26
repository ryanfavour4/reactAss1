import { Link } from "react-router-dom";
import React, { useState } from "react";

const Register = ({ AllUserDetails }) => {
  const [userObj, setUserObj] = useState({
    startYear: "",
    endYear: "",
    sessionTitle: "",
    semester: "",
    active: false,
  });

  function Lastevent() {
    AllUserDetails.push(userObj);
    localStorage.setItem("userPrevDetails", JSON.stringify(AllUserDetails));
    setUserObj({
      startYear: "",
      endYear: "",
      sessionTitle: "",
      semester: "",
      active: false,
    });
  }

  return (
    <div className="register">
      <div className="container">
        <div className="register_box">
          <div className="input_container">
            <div className="input_block">
              <label htmlFor="session">Session Title</label>
              <input
                type="text"
                id="session"
                placeholder="Session Title"
                onChange={(e) =>
                  setUserObj({ ...userObj, sessionTitle: e.target.value })
                }
              />
            </div>
            <div className="input_block">
              <label htmlFor="start">Start Year</label>
              <select
                name="start year"
                id="Start Year"
                onChange={(e) =>
                  setUserObj({ ...userObj, startYear: e.target.value })
                }>
                <option hidden value="">
                  Start Year
                </option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="input_block">
              <label htmlFor="semester">Semester</label>
              <select
                name=""
                id=""
                value={userObj.semester}
                onChange={(e) =>
                  setUserObj({ ...userObj, semester: e.target.value })
                }>
                <option hidden value="">
                  Semester
                </option>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
              </select>

              {/* <input
                type="text"
                id="semester"
                placeholder="Semester"
                // onChange={(e) =>
                  setUserObj({ ...userObj, semester: e.target.value })
                }
              /> */}
            </div>
            <div className="input_block">
              <label htmlFor="end_year">End Year</label>
              <select
                name="end year"
                id="end_year"
                onChange={(e) =>
                  setUserObj({ ...userObj, endYear: e.target.value })
                }>
                <option hidden value="">
                  End Year
                </option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="btn">
              <Link to="/" onClick={Lastevent}>
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
