import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main_content from './components/Main_content';
import FormIniciarSesion from './components/IniciarSesion';
import FormRegistro from './components/FormRegistro';

import './Spotify.css';

function Spotify() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main_content />} />
                    <Route path="/login" element={<FormIniciarSesion />} />
                    <Route path="/registro" element={
                        <div className="d-flex justify-content-center align-items-center vh-100">
                            <div className="p-4 rounded bg-dark text-white" style={{ width: "100%", maxWidth: "400px" }}>
                                <FormRegistro />
                            </div>
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Spotify;
