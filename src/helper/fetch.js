import fetch from "axios";

const GET = params => {
  return fetch.get(params.url, params.config);
};
const POST = params => {
  return fetch.get(params);
};
const PUT = params => {
  return fetch.get(params);
};
const DELETE = params => {
  return fetch.get(params);
};

export { GET, POST, PUT, DELETE };
