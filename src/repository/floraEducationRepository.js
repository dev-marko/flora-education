import axios from '../custom-axios/axios'

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

    fetchUser: (username) => {
        return axios.get(`/account/me?username=${username}`);
    },

    addBadge: async (username, badgeName) => {
        return axios.post("/badge/add-to-user", {
            "Username": username,
            "BadgeName": badgeName
        });
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
        }).then(() => {
            return window.location.href = '/login';
        })
    }
}

export default FloraService;