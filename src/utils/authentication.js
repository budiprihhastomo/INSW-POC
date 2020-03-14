import React, { Component } from "react";
import { Route } from "react-router-dom";
import Keycloak from "keycloak-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Containers
const DefaultLayout = React.lazy(() => import("../containers/DefaultLayout"));

export default class Authentication extends Component {
  state = {
    keycloak: null,
    authentication: false
  };

  onCheckAuthorization = () => {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({ onLoad: "login-required" })
      .success(authentication => {
        console.log(authentication);
        keycloak.loadUserProfile(profile => {
          const { attributes } = profile,
            { nip } = attributes;
        });
      })
      .error(() => {
        setTimeout(() => keycloak.logout(), 3000);
        return toast.error(
          "Terjadi kesalahan! Silahkan coba kembali atau hubungi Administrator."
        );
      });
  };

  componentWillMount() {
    this.onCheckAuthorization();
  }

  render() {
    return (
      <>
        <Route
          path="/"
          name="Home"
          render={props => <DefaultLayout {...props} />}
        />
      </>
    );
  }
}
