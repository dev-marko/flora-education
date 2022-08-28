import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {

    const params = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        if (token === null) {
            navigate('/login');
            return;
        }
    }, [token, navigate])

    return (<div>hello quiz</div>);
}

export default Quiz;