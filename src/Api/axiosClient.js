import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: 'https://minhanhwebapi.azurewebsites.net',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        console.log('run 1');
        return response.data._data;
    }

    console.log("run 2");
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;