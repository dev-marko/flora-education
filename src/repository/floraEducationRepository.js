import axios from '../custom-axios/axios'

const FloraService = {

    fetchPlantCategories: () => {
        return axios.get("/plant/categories");
    },

    fetchPlantsByCategory: (category) => {
        return axios.get(`/plant?query=${category}`)
    }
    
}

export default FloraService;