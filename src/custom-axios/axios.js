import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://localhost:44364/api',
        headers : {
            'Access-Control-Allow-Origin': '*'
        }
    }
)

export default instance;