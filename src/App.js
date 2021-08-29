import './App.css';
import Header from './Components/Header';
import { Login } from './Components/Login';
import bgImage from '/Users/orion/Desktop/service_booking/src/images/backG_SrBK.png';
function App() {
  return (
    <div className="application-page">
      <Header/>
      <img className="bg-img" src={bgImage} alt="bg" />
      <Login/>
    </div>
  );
}

export default App;
