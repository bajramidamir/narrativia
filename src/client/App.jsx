import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserHomepage from "./components/UserHomepage";
import CreatePost from "./components/CreatePost";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/register" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/userHome" Component={UserHomepage} />
        <Route path='/createPost' Component={CreatePost} />
        <Route path='/userProfile' Component={UserProfile} />
      </Routes>
    </Router>
  );
}

export default App;
