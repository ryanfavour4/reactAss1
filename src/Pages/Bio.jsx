import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Bio() {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  
  return (
    <div className="register">
      <div className="container">
        <div className="register_box">
          <div className="input_container">
            <div className="input_block">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                value={fname}
                placeholder="First Name"
                onChange={(e) =>
                  setFname(e.target.value)
                }
              />
            </div>
            <div className="input_block">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={lname}
                onChange={(e) =>
                  setLname(e.target.value)
                }
              />
            </div>
            <div className="input_block">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"

              />
            </div>
            <div className="input_block">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                id="number"
                placeholder="Phone Number"

              />
            </div>
            <div className="btn" onClick={localStorage.setItem("name",fname)}>
              <Link to="/">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio