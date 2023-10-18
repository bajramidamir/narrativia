import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from './components/Login';

function App() {
  

  return (
    <Router>
      <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/register' Component={Signup} />
          <Route path='/login' Component={Login} />
      </Routes>
    </Router>
  )
}

export default App;