
function LoginForm() {
    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className="row justify-content-center">
                <form className="col-lg-4 p-5 rounded shadow-sm" style={{ backgroundColor: "#C9F0B0" }}>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required />
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;