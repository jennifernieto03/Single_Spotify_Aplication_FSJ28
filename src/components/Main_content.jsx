import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Main_content.css'

import {artists} from "./artists.json"
import { canciones } from "./Songs.json"

import { VscAdd } from "react-icons/vsc";
export default function Main_content() {

    return (
        <>
            <div class="row">

                <aside class="lateral col-lg-1 col-md-3 col-sm-12 col-12">
                        <a href="" className=" sidebar-link text-decoration-none bg-transparent m-2">Tu biblioteca</a>
                        <a href="" className="idebar-link text-decoration-none bg-transparent m-2"><VscAdd /></a>
                
                    <div className="pt-5 bg-transparent">
                        <div className="card text-bg-dark rounded-4 m-2">
                            <div className="card-body rounded-5">
                                <h5 className="card-title ">Crea tu primera playlist</h5>
                                <p className="card-text">¡Es muy facil! Te vamos a ayudar</p>
                                <a href="#" className="btn btn-light rounded-pill ">Crear playlist</a>
                            </div>
                        </div>
                    </div>    
                
                    <div className="card text-bg-dark rounded-4 m-2">
                        <div className="card-body rounded-5">
                            <h5 className="card-title">Busquemos algunos podcasts para seguir</h5>
                            <p className="card-text">Te mantendremos al tanto de los nuevos episodios.</p>
                            <a href="#" className="btn btn-light  rounded-pill ">Explorar podcasts</a>
                        </div>
                    </div>
                </aside>

            

                {/* Canciones del momento */}
                
                <section className="container-fluid py-4 col-xl-8 col-lg-7 col-md-6 col-12">

                    <div className="pb-5">
                        <h4 className="text-light mb-3">Canciones del momento</h4>
                        <div
                            className="d-flex flex-wrap gap-3 justify-content-start"
                            style={{ rowGap: '1rem' }}
                        >
                            {canciones.map((cancion, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{ minWidth: '140px', flex: '1 0 140px' }}
                                    >
                                    <img
                                        src={cancion.portada}
                                        alt={cancion.nombre}
                                        className="img-fluid rounded-3 mb-2"
                                    />
                                    <p className="text-light mb-0">{cancion.nombre}</p>
                                    <small className="text-secondary">{cancion.Autores}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                        
                    
                    
            
                        <h4 className="text-light mb-3">Artistas Populares</h4>
                        <div
                            className="d-flex flex-wrap gap-3 justify-content-start"
                            style={{ rowGap: '1rem' }}
                        >
                            {artists.map((artists, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{ minWidth: '140px', flex: '1 0 140px' }}
                                >
                                    <img
                                        src={artists.imagen}
                                        alt={artists.nombre}
                                        className="img-fluid rounded-circle mb-2"
                                    />
                                    <p className="text-light mb-0">{artists.nombre}</p>
                                </div>
                            ))}
                        </div>
            </section>

            </div>
            
            
            
        </>
        
    )

}