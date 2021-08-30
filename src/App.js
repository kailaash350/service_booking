import "./App.css";
import Header from "./Components/Header";
import Login from './Components/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserFrontPage } from "./Components/UserFrontPage";
import { ContactPage } from "./Components/ContactPage";
import { ServicePage } from "./Components/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <div className="application-page">
        <Header/>
        <Switch>
          <Route path="/" exact component={UserFrontPage}/>
          <Route path="/authentication" component={Login}/>
          <Route path="/contactUs" component={ContactPage}/>
          <Route path="/bookService" component={ServicePage}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
