import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FloraService from "../../repository/floraEducationRepository";
import QuizQuestions from "./QuizQuestions";
import EndScreenPassed from "./EndScreenPassed";
import EndScreenFailed from "./EndScreenFailed";
import { QuizContext } from "../Helpers/Contexts"

function Quiz() {

    const params = useParams();
    const plantId = params.plantId;
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const [miniQuiz, setMiniQuiz] = useState();
    const [gameState, setGameState] = useState("quiz");
    const [score, setScore] = useState(0);
    const [questionsLength, setQuestionsLength] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (username === null) {
            navigate('/login');
            return;
        }
        FloraService.fetchMiniQuizByPlantId(plantId)
            .then((data) => {
                setMiniQuiz(data.data);
                setLoaded(true);
            })

    }, []);

    useEffect(() => {
        if (gameState === "endScreenPassed") {
            FloraService.addBadge(username, miniQuiz.plant.name);
        }
    }, [gameState]);

    return (
        <div>
            <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questionsLength, setQuestionsLength, miniQuiz, setMiniQuiz}}>
                {gameState === "quiz" && loaded && <QuizQuestions miniQuiz={miniQuiz}/>}
                {gameState === "endScreenPassed" && <EndScreenPassed />}
                {gameState === "endScreenFailed" && <EndScreenFailed />}
            </QuizContext.Provider>
        </div>
    );
}

export default Quiz;