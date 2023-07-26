import myAxios from "./axios";
import {GetMotionUser} from "../store/Context";

const headers = () => {
    const authHeader = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token").replaceAll("\"", "")
    };

    const loggedRole = localStorage.getItem("loggedRole");
    if (loggedRole !== null) {
        authHeader.MotionRole = loggedRole.replaceAll("\"", "");
    }

    return { headers: authHeader };
};

const HttpGetAxios = async (url) => {
    const config = headers();
    return myAxios.get(url,config);
};

const HttpPostAxios = async (url, body) => {
    const config = headers();
    return (myAxios.post(url, body, config));
};

const HttpPutAxios = async (url, body) => {
    const config = headers();
    return (myAxios.put(url, body, config));
};

const HttpDeleteAxios = async (url) => {
    const config = headers();
    return (myAxios.delete(url, config));
};

const HttpLoginAxios = async (email, password) => {
    const body = {email, password};
    return (myAxios.post("/auth/login", body ));
};


export {HttpGetAxios, HttpPostAxios, HttpPutAxios, HttpDeleteAxios, HttpLoginAxios};