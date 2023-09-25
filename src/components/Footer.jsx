import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>Nosotros</h6>
                            <p className="text-justify">Somos <i>ESTUDIANTES</i> del Instituto Politecnico Formosa que cursan el
                                primer año de la tecnicatura en DESARROLLO DE SOFTWARE MULTIPLATAFORMA</p>
                        </div>



                        <div className="col-xs-6 col-md-3">
                            <h6>LINKS</h6>
                            <ul className="footer-links">
                                <li><a href="">Contactactanos</a></li>
                                <li><a href="">Contribuciones</a></li>
                                <li><a href="">Politicas de privacidad</a></li>
                                <li><a href="">Ubicacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2023 todos los derechos estan reservados.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fab fa-facebook text-white"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fab fa-twitter text-white"></i></a></li>
                                <li><a className="github" href="#"><i className="fab fa-github text-white"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fab fa-linkedin text-white"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer