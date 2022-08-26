
function RegisterForm() {
    return (
        <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
            <form className="col-lg-4 p-5 rounded shadow-sm" style={{ backgroundColor: "#C9F0B0" }}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" required />
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required />
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required />
                </div>
                <div class="mb-3">
                    <label for="surname" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="surname" required />
                </div>
                <div class="mb-3 text-danger">
                    <small>*All fields are required.</small>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
    );
}

export default RegisterForm;