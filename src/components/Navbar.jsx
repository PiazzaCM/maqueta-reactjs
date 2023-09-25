import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="col-2">
                        <img src="/img/icon.png" width="60px" />
                        <a href="/" className="text-decoration-none text-dark ">
                            <strong className="align-content-lg-center">educARse</strong></a>
                    </div>


                    <div className="dropdown" id="mas-dropdown-navbar">
                        <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>MÁS</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-light text-small shadow" id="profile-dropdown">
                            <li><a className="dropdown-item" href="#">Explorar</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Favoritos</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Ayuda</a></li>
                        </ul>
                    </div>



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex" id="search-container">
                            <div className="input-wrapper">
                                <input type="search" className="input" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </form>


                        <div className="dropdown" id="mas-dropdown">
                            <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>MÁS</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light text-small shadow" id="profile-dropdown">
                                <li><a className="dropdown-item" href="/explorar">Explorar</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Favoritos</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Ayuda</a></li>
                            </ul>
                        </div>
                        <div className='button-area'> 
                        <a href="/view/login" className="btn btn-secondary">Inicar sesion</a>
                        <a href="/view/register" className="btn btn-primary">Registrate</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar