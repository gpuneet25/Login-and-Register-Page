import { BrowserRouter as Router, Route} from "react-router-dom";
import Heading from './components/Heading/Heading';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Homepage from '././components/Homepage/Homepage';
import Registrations from './components/Registrations/Registrations';
import Bus from "./components/Bus/Bus";
import Login from "./components/Login/Login"

function App() {
  return (
    <>
    <Router>
     <Route exact path="/" component={Homepage} />
     {/* <Route exact path="/home" component={Home} /> */}
     <Route exact path="/signin" component={Login} />
     <Route exact path="/flight" component={Homepage} />
     <Route exact path="/bus" component={Bus} />
     {/* <Route exact path="/signedin/flight" component={Homepage} /> */}
     <Route exact path="/registration" component={Signup} />
     {/* <Route exact path="/signedup" component={Registrations} /> */}
    </Router>
    </>
  );
}

export default App;