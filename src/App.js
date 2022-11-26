import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Register from "./Pages/Registration";
import Bio from "./Pages/Bio";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";

function App() {
  let AllUserDetails = JSON.parse(localStorage.getItem("userPrevDetails") || '[]');

  return (
    <div className="App">
      <Router >
        <Navbar />
        <Title AllUserDetails={AllUserDetails} />
        <Routes>
          <Route path="/" element={<Dashboard AllUserDetails={AllUserDetails} />} />
          <Route path="/register" element={<Register AllUserDetails={AllUserDetails} />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
