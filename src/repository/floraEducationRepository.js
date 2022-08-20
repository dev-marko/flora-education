import axios from '../custom-axios/axios'

const FloraService = {

    fetchPlantCategories: () => {
        return axios.get("/plant/categories");
    },
    
}

export default FloraService;