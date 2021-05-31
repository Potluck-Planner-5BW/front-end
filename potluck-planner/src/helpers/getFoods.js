import { axiosWithAuth } from "./axiosWithAuth";

export const fetchFoods = () => {
    return axiosWithAuth()
    .get("/potluck")
    .then((res) => res)
    .catch((err) =>err);
};