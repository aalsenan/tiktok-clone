import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-clone-bckend.herokuapp.com/"
});

export default instance