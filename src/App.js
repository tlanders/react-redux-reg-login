import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">

            <HomePage/>
            <LoginPage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
