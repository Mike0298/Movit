import axios from "axios";

const BASE_API_URL = "https://movit-api.herokuapp.com/api";
export default function CallApi(endPoint, method = "GET", body) {
    return axios({
        method,
        url: `${BASE_API_URL}/${endPoint}`,
        data: body,
    }).catch((error) => {
        console.log("error", error);
    });
}
