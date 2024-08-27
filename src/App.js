import './App.css';
import {Auth0Provider} from "@auth0/auth0-react";
import Header from "./layout/Header";

function App() {
    const domain = process.env.REACT_APP_AUTH_DOMAIN,
        clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

    return (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
              redirect_uri: window.location.origin,
          }}
          >
            <Header />
        </Auth0Provider>
    );
}

export default App;
