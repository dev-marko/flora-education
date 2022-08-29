import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FloraService from "../../repository/floraEducationRepository";

function Plant() {

    const params = useParams();
    const plantId = params.plantId;
    const [plant, setPlant] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [text, setText] = useState();

    useEffect(() => {
        FloraService.fetchPlantById(plantId)
            .then((data) => {
                setPlant(data.data);
                setText(data.data.description);
                setLoaded(true);
            })
    }, [plantId])

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row rounded" style={{ backgroundColor: "#C9F0B0" }}>
                <div className="col p-4">
                    <h2 className='p-2 text-start'>
                        {plant.name}
                    </h2>
                    {
                        loaded ? (<img className="img-fluid rounded" src={require(`./images/plants/${plant.id}.jpg`)} alt="{plant.name}" />) : null
                    }
                    <div class="pt-2 hstack gap-3 justify-content-center">
                        <button onClick={() => {setText(plant.description)}} className="btn btn-success">Опис</button>
                        <button onClick={() => {setText(plant.predispositions)}} className="btn btn-success">Предуслови</button>
                        <button onClick={() => {setText(plant.planting)}} className="btn btn-success">Садење</button>
                        <button onClick={() => {setText(plant.maintenance)}} className="btn btn-success">Одржување</button>
                    </div>
                </div>
                <div className="col p-4">
                    <h2 className='p-2 text-start'>
                        Краток опис
                    </h2>
                    <hr />
                    <p className='p-2 text-start fs-5'>
                        {text}
                    </p>
                </div>
            </div>
            <div className="row rounded mt-4" style={{ backgroundColor: "#C9F0B0" }}>
                <div className="col p-4">
                    <form>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </form>
                </div>
                <div className="col p-4 text-center">
                    <div>
                        <p className="fs-6 align-middle">
                            Тестирајте го вашето знаење на темата со краток квиз!
                            <a className="btn btn-success ms-3" href={`/mini-quiz/${plant.id}`}>Мини-квиз</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plant;