import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Admin from "./Admin";
import Loading from "./Loading";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import Print from "./Print";
// styles

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Root from "./Root";
import Home from "./Home";
import Landing from "./Landing.js";
import './App.css';

initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated){
    return(
      <Router history={history}>
      <Admin/>
            
          
        </Router>
    );
  }else{
    return(
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/root" exact component={Root} />
            <Route path="/landing" exact component={Landing} />
            <Route path="/print" exact component={Print} />
            <Route path="/admin" exact component={Admin} />
            
          </Switch>
      </div>
      </Router>
  );
};
};
export default App;
