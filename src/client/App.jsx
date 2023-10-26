import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserHomepage from "./components/UserHomepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/register" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/userHome" Component={UserHomepage} />
      </Routes>
    </Router>
  );
}

export default App;
