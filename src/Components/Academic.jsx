import React, { useState } from 'react';

const Academic = () => {

  const [userObj, setUserObj] = useState({
    startYear: '',
    endYear: '',
    sessionTitle: '',
    semester: '',
  })

  let AllUserDetails = JSON.parse(localStorage.getItem('userPrevDetails') || '[]')

  function Lastevent() {
    AllUserDetails.push(userObj)
    localStorage.setItem('userPrevDetails', JSON.stringify(AllUserDetails))
  }

  return (
    <div className="academic">
      {userObj.sessionTitle}
      <div className="startYear">
        <label>Start Year</label>
        <select value={userObj.startYear} onChange={(e) => setUserObj({ ...userObj, startYear: e.target.value })}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
        </select>
      </div>
      <div className="endYear">
        <label>End Year</label>
        <select value={userObj.endYear} onChange={(e) => setUserObj({ ...userObj, endYear: e.target.value })}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
        </select>
      </div>
      <div className="sessionTitle">
        <label>Session Title</label>
        <input type="text" value={userObj.sessionTitle} onChange={(e) => { setUserObj({ ...userObj, sessionTitle: e.target.value }) }} />
      </div>
      <div className="semester">
        <label>Semester</label>
        <select value={userObj.semester} onChange={(e) => setUserObj({ ...userObj, semester: e.target.value })}>
          <option value='1st'>1st semester</option>
          <option value='2nd'>2nd semester</option>
        </select>
      </div>

      <button onClick={Lastevent}>Add User</button>
    </div >
  );
}

export default Academic;
