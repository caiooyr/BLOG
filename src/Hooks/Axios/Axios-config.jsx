import axios from "axios";

const blogAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', 
    headers: {
        "Content-Type" : "appcation/json",
        meuToken: "meuToken"
    }
})

export default blogAxios;