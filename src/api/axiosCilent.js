import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://61cae555194ffe0017788a12.mockapi.io",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;