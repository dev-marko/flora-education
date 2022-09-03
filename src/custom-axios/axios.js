import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://flora-education-api.herokuapp.com/api',
        headers : {
            'Access-Control-Allow-Origin': '*'
        }
    }
)

export default instance;