import logo from './logo.svg';
import Header from './components/Header';
import Calendars from './components/Calendars';
import Loginpage from "./components/Loginpage/Loginpage";
import Calculate from './components/Calculate/Calculate';
import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
     <Route exact path="/" component={Navbar} />
     <Route exact path="/home" component={Calculate} />
     <Route exact path="/signin" component={Loginpage} />
     <Route exact path="/registration" component={Registration} />
    </Router>
    </>
  );
}

export default App;