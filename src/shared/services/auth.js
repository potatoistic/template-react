import axios from "../helpers/axios";

const loginHandler = async (dto) => {
  try {
    const { data } = await axios.post("/login", dto);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const AuthService = {
  loginHandler,
};

export default AuthService;
