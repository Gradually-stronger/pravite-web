import request from "./request";

const BaseUrl = "http://127.0.0.1:8819";

const signUp = () =>
  request({
    url: BaseUrl + "/user/signup",
    type: "post"
  });

export default {
  signUp
};
