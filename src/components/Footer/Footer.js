const Footer = () => {
    return (
        <footer className="p-4 text-white text-center">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-12 col-md-4">
                        <h2 className="brittany text-white text-center">Relax</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 className="mb-4 fst-italic">Contactanos</h4>
                        <p className="mb-2"><i className="bi bi-phone"></i> 3412485979</p>
                        <p><i className="bi bi-geo-alt"></i> Rosario, Santa Fe</p>
                    </div>
                    <div className="col-12 col-md-4 text-white text-center">
                        <h4 className="mb-4 fst-italic">Seguinos en nuestras redes</h4>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center">
                            <li>
                                <a href="#"><i className="bi bi-facebook redes fs-4"></i></a>
                            </li>
                            <li className="mx-4">
                                <a href="#"><i className="bi bi-pinterest redes fs-4"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="bi bi-instagram redes fs-4"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="d-flex flex-column">
                        <small>© Copyright 2023 | Todos los derechos reservados</small>
                        <small>Desarrollado por <span className="brittany fs-6">Carla Sablic ♥</span></small>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;