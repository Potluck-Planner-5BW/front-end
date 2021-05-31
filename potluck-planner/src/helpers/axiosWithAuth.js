import axios from "axios";
export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "https://potluck-planner-4-backend.herokuapp.com",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`
        },
    });
};

//Task List:
//Build and export a function used to send in our authorization token