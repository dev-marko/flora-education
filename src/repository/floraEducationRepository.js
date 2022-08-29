import axios from '../custom-axios/axios'

axios.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error)
);

const FloraService = {

    fetchPlantCategories: () => {
        return axios.get("/plant/categories");
    },

    fetchPlantsByCategory: (category) => {
        return axios.get(`/plant?query=${category}`);
    },

    fetchPlantById: (plantId) => {
        return axios.get(`/plant/${plantId}`);
    },

    fetchMiniQuizByPlantId: (plantId) => {
        return axios.get(`/plant/${plantId}/mini-quiz`);
    },

    login: (username, password) => {
        return axios.post("/account/login", {
                "Username": username,
                "Password": password
            }).catch((error) => {
                if (error.response.status === 404) {
                    return window.location.href = '/login';
                }
                return Promise.reject(error);
            });
    },

    register: (email, username, password, name, surname) => {
        return axios.post("/account/register", {
            "Email": email,
            "Username": username,
            "Password": password,
            "Name": name,
            "Surname": surname
        }).then((response) => {
            return window.location.href = '/login';
        })
    }
}

export default FloraService;