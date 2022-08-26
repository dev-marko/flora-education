import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import FloraService from '../../repository/floraEducationRepository';
import PlantCard from './PlantCard';

function Plants() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('query');

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        FloraService.fetchPlantsByCategory(category)
            .then((data) => {
                setPlants(data.data);
            })
    }, [category]);

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row mt-5 justify-content-center text-center">
                {
                    plants.map((term) => {

                        const imageUri = `./images/plants/${term.name.toLowerCase()}.png`

                        return (
                            <PlantCard key={term.id} image={imageUri} term={term} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Plants;