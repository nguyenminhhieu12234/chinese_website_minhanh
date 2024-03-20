import axiosClient from "./axiosClient";

const LoginApi = {
    login: (params) => {
        const url = '/api/User/login-user';
        return axiosClient.post(url, params);
    }
}

export default LoginApi;