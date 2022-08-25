import { useEffect, useState } from "react";
import PlantCategoryCard from "./PlantCategoryCard";
import FloraService from "../../repository/floraEducationRepository"

function PlantCategories () {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      FloraService.fetchPlantCategories()
      .then((data) => {
        setCategories(data.data.categories);
      })
    }, [])

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row mt-5 justify-content-center text-center">
                {
                    categories.map((term) => {   

                        const imageUri = `./images/categories/${term.toLowerCase()}.png`

                        return (
                            <PlantCategoryCard key={term} image={imageUri} term={term}/>
                        );
                    })
                }
            </div>
        </div>
    );
            

}

export default PlantCategories;