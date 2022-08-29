import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";

function QuizQuestions({ miniQuiz }) {
    const questions = miniQuiz.questions;
    questions.sort((a, b) => a.question.localeCompare(b.question));
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(0);

    const { score, setScore, setGameState, setQuestionsLength } = useContext(QuizContext);

    const nextQuestion = () => {
        if (questions[currQuestion].correctAnswerIndex === optionChosen) {
            setScore(score + 1);
        }

        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (questions[currQuestion].correctAnswerIndex === optionChosen) {
            setScore(score + 1);
        }

        setQuestionsLength(questions.length);

        if (questions.length % 2 === 0) {
            if (score >= questions.length / 2) {
                setGameState("endScreenPassed");
            } else {
                setGameState("endScreenFailed");
            }
        } else {
            if (score >= Math.ceil(questions.length / 2)) {
                setGameState("endScreenPassed");
            } else {
                setGameState("endScreenFailed");
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row justify-content-center mb-3">
                <div className="col-md-8 p-4 rounded" style={{ backgroundColor: "#C9F0B0" }}>
                    <h2>
                        {miniQuiz.title}
                    </h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 p-4 rounded" style={{ backgroundColor: "#C9F0B0" }}>
                    <h2>
                        {questions[currQuestion].question}
                    </h2>
                    <div className="mt-5 ms-5">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="answer" id="answer1" onChange={() => setOptionChosen(0)} />
                            <label className="form-check-label" htmlFor="answer1">
                                {questions[currQuestion].answers[0]}
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="answer" id="answer2" onChange={() => setOptionChosen(1)} />
                            <label className="form-check-label" htmlFor="answer2">
                                {questions[currQuestion].answers[1]}
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="answer" id="answer3" onChange={() => setOptionChosen(2)} />
                            <label className="form-check-label" htmlFor="answer3">
                                {questions[currQuestion].answers[2]}
                            </label>
                        </div><div className="form-check">
                            <input className="form-check-input" type="radio" name="answer" id="answer4" onChange={() => setOptionChosen(3)} />
                            <label className="form-check-label" htmlFor="answer4">
                                {questions[currQuestion].answers[3]}
                            </label>
                        </div>
                    </div>
                    <div className="text-end me-3">
                        {
                            currQuestion === questions.length - 1 ?
                                (
                                    <button className="btn btn-success" onClick={finishQuiz}>Заврши квиз</button>
                                )
                                :
                                (
                                    <button className="btn btn-success" onClick={nextQuestion}>Следно прашање</button>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizQuestions;