function Home() {
    return (
        <div className="container" style={{marginTop: '100px'}}>
            <div className="row">
                <div className="col p-4" style={{ backgroundColor: "#C9F0B0" }}>
                    <img className="img-fluid" src={require('./images/lady-holding-plant.jpg')} alt="lady holding a plant" />
                </div>
                <div className="col p-4" style={{ backgroundColor: "#C9F0B0" }}>
                    <h4 className='p-2 text-center'>
                        Добредојдовте на Флора Едукација!
                    </h4>
                    <hr />
                    <p className='mt-5 p-2 text-start'>
                        Флора Едукација претставува веб страница наменета
                        за изучување на домашно градинарство. Страницата
                        е наменета за сите возрасни групи и има цел да ги
                        подобри градинарските вештини на граѓаните во
                        Македонија!
                    </p>
                </div>
            </div>
            <div className='row mt-4 d-flex justify-content-between text-center'>
                <div className='col-3' style={{ backgroundColor: "#C9F0B0" }}>
                    <img className='img-fluid w-50 p-2' src={require('./images/garden-showel.png')} alt="garden shovel" />
                    <p className='p-2'>Научете да садите голем број на разновидни растенија!</p>
                </div>
                <div className='col-3' style={{ backgroundColor: "#C9F0B0" }}>
                    <img className='img-fluid w-50 p-2' src={require('./images/garden-sheers.png')} alt="garden sheers" />
                    <p className='p-2'>Совети за одржување на вашите насади</p>
                </div>
                <div className='col-3' style={{ backgroundColor: "#C9F0B0" }}>
                    <img className='img-fluid w-50 p-2' src={require('./images/handshake.png')} alt="handshake" />
                    <p className='p-2'>Комуницирајте со други корисници и решавајте ги проблемите заедно!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;