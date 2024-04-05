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
    },
    runDaily: (params) => {
        const url = '/api/Course/run-daily';
        return axiosClient.post(url, params);
    },
    getDaily: (params) => {
        const url = '/api/Daily/get-daily';
        return axiosClient.get(url, {params});
    },
    getDailyStudent: (params) => {
        const url = '/api/Daily/get-daily-student';
        return axiosClient.get(url, {params});
    },
    updateDaily: (params) => {
        const url = '/api/Daily/update-daily';
        return axiosClient.post(url, params);
    }
}

export default mainApi;