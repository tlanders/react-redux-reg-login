import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import {Navigate} from "react-router";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
                <Route exact path={'/login'} element={<LoginPage/>}/>
                <Route exact path={'/register'} element={<RegisterPage/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
