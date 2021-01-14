import request from "./request";

const BaseUrl = "http://193.112.205.103:8819";

const signUp = () =>
  request({
    url: BaseUrl + "/user/signup",
    type: "post"
  });

export default {
  signUp
};
