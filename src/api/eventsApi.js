import axiosClient from "./axiosCilent";

const eventsApi={

    GetEvents(){
        const url = '/events';
        const res = axiosClient.get(url)
        .then(res=>{
            return res.data;
        })
        return res
    },

};

export default eventsApi; 