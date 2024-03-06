import axiosClient from "./axiosClient";

const LoginApi = {
    login: (params) => {
        const url = '/api/login';
        return axiosClient.post(url, params);
    }
}

export default LoginApi;