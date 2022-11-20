import axios from "axios";

let baseURL;
baseURL = 'http://localhost:4000';

let Axios;

const init = () => {
  Axios = axios.create({
    baseURL: baseURL
  });
  Axios.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
  Axios.interceptors.response.use(handleSuccess, handleError);
};

const handleSuccessRequest = (request) => {
  let token=localStorage.getItem("token")
  if (token){
    request.headers["auth-token"] = `${token}`;
  request.headers["api-url"] = baseURL;
  }
  return request;
};

const handleErrorRequest = (error) => {
  return Promise.reject(error);
};

const handleSuccess = (response) => {
  return response;
};

const handleError = (error) => {
  if(error.response.status==401){
    localStorage.clear("token");
    window.location.href="/Login"
  }
  else{

    return Promise.reject(error.response);
  }

};

init();

export default Axios;
