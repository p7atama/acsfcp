import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./components/utils/history";
import { getConfig } from "./components/config";
import "./components/assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };
  
  // Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
  // for a full list of the available properties on the provider
  const config = getConfig();
  
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: window.location.origin,
    onRedirectCallback,
  };
  
  ReactDOM.render(
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
