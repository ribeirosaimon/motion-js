import myAxios from "./axios";

const headers = () => {
    return (
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token").replace("\"", "")
            }
        }
    );
};

const HttpGetAxios = async (url) => {
    return myAxios.get(url, headers());
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

const HttpLoginAxios = async (username, password) => {
    const body = {username, password};
    return (myAxios.post("/login", body));
};


export {HttpGetAxios, HttpPostAxios, HttpPutAxios, HttpDeleteAxios, HttpLoginAxios};