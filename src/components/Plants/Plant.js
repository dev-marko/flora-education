import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FloraService from "../../repository/floraEducationRepository";

function Plant() {

    const params = useParams();
    const plantId = params.plantId;
    const [plant, setPlant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState();

    useEffect(() => {
        FloraService.fetchPlantById(plantId)
            .then((data) => {
                setPlant(data.data);
                setText(data.data.description);
                setLoading(false);
            })
    }, [plantId])

    console.log(plant);

    return (
        <div className="container" style={{ marginTop: '100px', paddingBottom: '35px' }}>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a className='text-dark' style={{ textDecoration: "none" }} href="/home">Дома</a></li>
                    <li class="breadcrumb-item"><a className='text-dark' style={{ textDecoration: "none" }} href="/plant-categories">Сите растенија</a></li>
                    <li class="breadcrumb-item"><a className='text-dark' style={{ textDecoration: "none" }} href={`/plants?query=${plant.type}`}>{plant.type}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{plant.name}</li>
                </ol>
            </nav>
            {
                loading ?
                    (
                        <div className="row justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    :
                    (
                        <>
                            <div className="row rounded" style={{ backgroundColor: "#C9F0B0" }}>
                                <div className="col p-4">
                                    <h2 className='p-2 text-center'>
                                        {plant.name}
                                    </h2>
                                    <hr />
                                    <img className="img-fluid d-block mx-auto rounded w-75" src={require(`./images/plants/${plant.id}.jpg`)} alt="{plant.name}" />
                                    <div class="pt-2 hstack gap-3 justify-content-center">
                                        <button onClick={() => { setText(plant.description) }} className="btn btn-success">Опис</button>
                                        <button onClick={() => { setText(plant.predispositions) }} className="btn btn-success">Предуслови</button>
                                        <button onClick={() => { setText(plant.planting) }} className="btn btn-success">Садење</button>
                                        <button onClick={() => { setText(plant.maintenance) }} className="btn btn-success">Одржување</button>
                                    </div>
                                </div>
                                <div className="col p-4">
                                    <h2 className='p-2 text-center'>
                                        Краток опис
                                    </h2>
                                    <hr />
                                    <p className='p-2 text-start fs-5'>
                                        {text}
                                    </p>
                                </div>
                            </div>
                            <div className="row rounded mt-4" style={{ backgroundColor: "#C9F0B0" }}>
                                <div className="col p-4 justify-content-center">
                                    <div className="hstack justify-content-center gap-3">
                                        <p className="fs-5 m-0">
                                            Тестирајте го вашето знаење на темата со краток квиз!
                                        </p>
                                        <a className="btn btn-info" href={`/mini-quiz/${plant.id}`}>Мини-квиз <i class="bi bi-patch-question"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row rounded mt-4" style={{ backgroundColor: "#C9F0B0" }}>
                                <div className="col p-4 justify-content-center">
                                    <h2><i class="bi bi-chat-square-text"></i> Коментари:</h2>
                                    {
                                        plant.comments.map((term) => {
                                            return (
                                                <div className="m-3 p-4 rounded-pill bg-light">
                                                    <p className="p-3 m-0">{term.author.username} коментирал:</p>
                                                    <hr className="m-0"/>
                                                    <p className="p-3 m-0">{term.content}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="row rounded mt-4" style={{ backgroundColor: "#C9F0B0", marginBottom: "50px" }}>
                                <div className="col p-4">
                                    <form className="hstack justify-content-center gap-3">
                                        <div class="form-floating w-75">
                                            <textarea class="form-control" placeholder="Напишете коментар..." id="comment"></textarea>
                                            <label for="comment">Коментар</label>
                                        </div>
                                        <button className="btn btn-primary">Коментирај <i class="bi bi-send"></i></button>
                                    </form>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    );
}

export default Plant;