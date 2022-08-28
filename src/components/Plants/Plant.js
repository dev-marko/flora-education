import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FloraService from "../../repository/floraEducationRepository";

function Plant() {

    const params = useParams();
    const plantId = params.plantId;
    const [plant, setPlant] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        FloraService.fetchPlantById(plantId)
            .then((data) => {
                setPlant(data.data);
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
                        <a href="#" className="btn btn-success">Опис</a>
                        <a href="#" className="btn btn-success">Предуслови</a>
                        <a href="#" className="btn btn-success">Садење</a>
                        <a href="#" className="btn btn-success">Одржување</a>
                    </div>
                </div>
                <div className="col p-4">
                    <h2 className='p-2 text-start'>
                        Краток опис
                    </h2>
                    <hr />
                    <p className='p-2 text-start fs-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Id leo in vitae turpis. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Diam sollicitudin tempor id eu.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quis risus sed vulputate odio.
                        Scelerisque purus semper eget duis at. Blandit turpis cursus in hac. Adipiscing diam donec adipiscing tristique risus.
                        Duis convallis convallis tellus id interdum velit laoreet. Malesuada pellentesque elit eget gravida.
                        Tincidunt vitae semper quis lectus nulla. Lorem mollis aliquam ut porttitor leo a diam.
                        Vivamus at augue eget arcu dictum varius duis at. Ornare massa eget egestas purus viverra accumsan in nisl.
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