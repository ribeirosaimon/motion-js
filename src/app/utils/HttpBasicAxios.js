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
    console.log("no local storage" + localStorage.getItem("token"))
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

const HttpLoginAxios = async (email, password) => {
    const body = {email, password};
    return (myAxios.post("/auth/login", body ));
};


export {HttpGetAxios, HttpPostAxios, HttpPutAxios, HttpDeleteAxios, HttpLoginAxios};