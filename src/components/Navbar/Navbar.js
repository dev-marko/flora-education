function Navbar() {
    return (
        <nav className="navbar fixed-top" style={{ backgroundColor: "#92D866" }}>
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href="/home">Флора Едукација</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor: "#92D866"}}>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body fs-3">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/home">Дома</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/plant-categories">Сите растенија</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">За нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Контакт</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Најава</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Регистрација</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;