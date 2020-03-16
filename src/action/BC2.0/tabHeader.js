import { GET, POST } from "../../helper/fetch";

const { REACT_APP_REFERENSI_API, REACT_APP_REFERENSI_KEY } = process.env;

export const _PelabuhanTujuan = filter => {
  const params = {
    url: `${REACT_APP_REFERENSI_API}/v1/kantor/by-pelabuhan/${filter}`,
    config: {
      headers: {
        "X-Gravitee-Api-Key": REACT_APP_REFERENSI_KEY
      }
    }
  };
  GET(params).then(res => console.log(res.data));
};
