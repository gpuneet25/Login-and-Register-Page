import { BrowserRouter as Router, Route} from "react-router-dom";
import Heading from './components/Heading/Heading';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Signinpage from './components/Signinpage/Signinpage';
import Registrations from './components/Registrations/Registrations';

function App() {
  return (
    <>
    <Router>
     <Route exact path="/" component={Heading} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/signin" component={Signin} />
     <Route exact path="/signedin" component={Signinpage} />
     <Route exact path="/registration" component={Signup} />
     <Route exact path="/signedup" component={Registrations} />
    </Router>
    </>
  );
}

export default App;