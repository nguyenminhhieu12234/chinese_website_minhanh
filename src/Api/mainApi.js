import axiosClient from "./axiosClient";

const mainApi = {
    getUsers: () => {
        const url = '/api/User/get-users';
        return axiosClient.get(url);
    },
    getIdUsers: (params) => {
        const url = '/api/User/get-id-users';
        return axiosClient.post(url, params);
    },
    createUser: (param) => {
        const url = '/api/User/register_account';
        return axiosClient.post(url, param);
    },
    getShifts: () => {
        const url = '/api/Shift/get-shift';
        return axiosClient.get(url);
    },
    createCourse: (params) => {
        const url = '/api/Course/create-course';
        return axiosClient.post(url, params);
    },
    getCourses: () => {
        const url = '/api/Course/get-courses';
        return axiosClient.get(url);
    }
}

export default mainApi;