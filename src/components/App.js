import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./Loading";
import NavBar from "./NavBar";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

// styles

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Root from "./Root";
import Home from "./Home";
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
      <Root/>
            
          
        </Router>
    );
  }else{
    return(
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/root" exact component={Root} />
          </Switch>
        </Container>
      </div>
      </Router>
  );
};
};
export default App;
