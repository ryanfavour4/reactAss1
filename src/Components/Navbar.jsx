import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'
import Userimg from '../Images/Nature.jpg'


const Navbar = () => {

  let namebio = localStorage.getItem('name')

  return (
    <div className="topnavbar">
      <div className="container">
        <div className="flex_navbar">
          <div className="logo">
            <img src={logo} alt="" />
            <h3 className="logoname">E-class</h3>
          </div>
          <ul className="nav_links">
            <li className="links">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="links">
              <Link to="/register">Registration</Link>
            </li>
          </ul>
          <div className="user_bio">
            <Link to="/bio">
              <h3 className="users_name">{!namebio ? 'Users Name' : namebio}</h3>
              <img src={Userimg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
