import React, { Component } from "react";
import { Route } from "react-router-dom";
import Keycloak from "keycloak-js";
import { toast } from "react-toastify";
import fetch from "axios";
import "react-toastify/dist/ReactToastify.css";

// Containers
const DefaultLayout = React.lazy(() => import("../containers/DefaultLayout"));
const {
  REACT_APP_AMWS_API,
  REACT_APP_AMWS_KEY,
  REACT_APP_REFERENSI_API,
  REACT_APP_REFERENSI_KEY
} = process.env;
const cfgAMWS = { headers: { "X-Gravitee-Api-Key": REACT_APP_AMWS_KEY } };
const cfgREF = { headers: { "X-Gravitee-Api-Key": REACT_APP_REFERENSI_KEY } };

export default class Authentication extends Component {
  state = {
    keycloak: null,
    authentication: false,
    profile: {
      pengguna: null,
      perusahaan: null
    }
  };

  onCheckAuthorization = () => {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({ onLoad: "login-required" })
      .success(authentication => {
        keycloak
          .loadUserInfo()
          .success(profile => {
            if (!profile.email_verified) {
              setTimeout(() => keycloak.logout(), 3000);
              return toast.warn(
                "Anda belum melakukan verifikasi akun dengan e-mail. Aktifkan akun terlebih dahulu!"
              );
            }
            this.setState({ keycloak, authentication });
            this._FetchByEmail(profile.email);
          })
          .error(() => setTimeout(() => keycloak.logout(), 3000));
      })
      .error(() => {
        setTimeout(() => keycloak.logout(), 3000);
        return toast.error(
          "Terjadi kesalahan! Silahkan coba kembali atau hubungi Administrator."
        );
      });
  };

  _FetchByEmail = email => {
    const path = `${REACT_APP_AMWS_API}/v1/user/user-info-by-email`;
    const config = {
      ...cfgAMWS,
      params: { email }
    };
    fetch
      .get(path, config)
      .then(({ data }) => {
        this.setState(pState => ({
          profile: { ...pState.profile, pengguna: data.item }
        }));
        this._FetchByNIB(data.item.identitas);
      })
      .catch(() => {
        toast.error(
          "Gagal mengambil informasi pengguna, coba kembali beberapa saat."
        );
        return this.state.keycloak.logout();
      });
  };

  _FetchByNIB = nib => {
    const path = `${REACT_APP_REFERENSI_API}/v1/profile-perusahaan/get-user-info`;
    const config = {
      ...cfgREF,
      params: { nib }
    };
    fetch
      .post(path, null, config)
      .then(({ data }) =>
        this.setState(pState => ({
          profile: { ...pState.profile, perusahaan: data.item }
        }))
      )
      .catch(() =>
        toast.error(
          "Gagal mengambil informasi pengguna, coba kembali beberapa saat."
        )
      );
  };

  componentDidMount() {
    this.onCheckAuthorization();
  }

  render() {
    return (
      <>
        <Route
          path="/"
          name="Home"
          render={props => (
            <DefaultLayout keycloak={this.state.keycloak} {...props} />
          )}
        />
      </>
    );
  }
}
