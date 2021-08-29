import "./App.css";
import Header from "./Components/Header";
import Login from './Components/Login';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="application-page">
        <Header/>
        <Switch>
          <Route path="/authentication" component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
