import axios from "../helpers/axios";

const loginHandler = (dto) => {
  return axios.post('/login', dto)
};

const AuthService = {
  loginHandler,
};

export default AuthService;
