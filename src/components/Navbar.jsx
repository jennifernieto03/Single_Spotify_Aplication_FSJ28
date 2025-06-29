import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormIniciarSesion from './IniciarSesion'; // componente con el formulario

export const logo = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png";
export const homeIMG = "https://res.cloudinary.com/djn6tkvvl/image/upload/v1750647725/pngegg_1_xsnggy.png";
export const zoomIMG = "https://res.cloudinary.com/djn6tkvvl/image/upload/v1750647647/pngegg_bakkot.png";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid bg-dark">
                    <a className="navbar-brand px-0" href="#">
                        <img width="40px" src={logo} alt="LogoSpotify" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-1">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <img src={homeIMG} alt="" width="35" height="35" />
                                </a>
                            </li>
                            <form className="d-flex col-10" role="search">
                                <input className="form-control me-2 w-100 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn" type="submit">
                                    <img src={zoomIMG} alt="" width="35" height="35" />
                                </button>
                            </form>
                            <li className="nav-item pt-1">
                                <a className="nav-link text-white" href="#">Premium</a>
                            </li>
                            <li className="nav-item pt-1">
                                <a className="nav-link text-white" href="#">Ayuda</a>
                            </li>
                            <li className="nav-item pt-1">
                                <a className="nav-link text-white" href="#">Descargar</a>
                            </li>
                        </ul>

                        {/* Sección alineada a la derecha */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div className="vr mx-3 d-none d-lg-block text-white"></div>
                            <li className="nav-item pt-1">
                                <a className="nav-link text-white" href="/registro">Regístrate</a>
                            </li>
                            <li className="nav-item pt-1">
                                {/* Botón que abre el modal */}
                                <button
                                    className="btn btn-light rounded-pill px-3 fw-bold"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                >
                                    Iniciar sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal con el formulario de inicio de sesión */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Iniciar sesión</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormIniciarSesion />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
