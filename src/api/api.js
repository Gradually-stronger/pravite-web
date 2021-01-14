import request from "./request";

const BaseUrl = "http://193.112.205.103:8819/api/v1";

const signUp = () =>
  request({
    url: BaseUrl + "/register/login",
    method: "POST"
  });

export default {
  signUp
};
