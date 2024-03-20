import axiosClient from "./axiosClient";

const mainApi = {
    getUsers: () => {
        const url = '/api/User/get-users';
        return axiosClient.get(url);
    },
    createUser: (param) => {
        const url = '/api/User/register_account';
        return axiosClient.post(url, param);
    }
}

export default mainApi;