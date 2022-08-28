import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloraService from "../../repository/floraEducationRepository";

function LoginForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault();
        const token = await FloraService.login(username, password);
        localStorage.setItem('token', token.data);
        navigate("/home");
    }

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row justify-content-center">
                <form className="col-lg-4 p-5 rounded shadow-sm" style={{ backgroundColor: "#C9F0B0" }} onSubmit={handleLogin}>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    {
                        localStorage.getItem('token') === undefined ? <div className="mb-2"><small className="text-danger"> Invalid credentials. Please try again.</small></div> : null 
                    }
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;