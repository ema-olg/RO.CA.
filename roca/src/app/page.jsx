"use client"
import "./page.css"
import Botones from "./botones";
import Link from "next/link";
import Navegacion from "./Navegacion";
import BackgroundUpdater from "../../helpers/backgroundUpdater";
import { useEffect, useRef, useState } from "react";

const page = () => {
    const [nav, setNav] = useState(false);

    // Cambia fondo y elimina al salir
    BackgroundUpdater('imgHomeSegurity.jpg')

    const openClose = () => {
        nav ? setNav(false) : setNav(true)
    }

    const openCloseRef= useRef(null)
    
    // dependiendo del estado "nav" añade o remueve className
    useEffect(() => {
        return nav
        ?(
            openCloseRef.current.classList.remove('close'),
            openCloseRef.current.classList.add('open')
        )
        :(
            openCloseRef.current.classList.add('close'),
            openCloseRef.current.classList.remove('open')
        )
    }, [nav]);

    return (
        <>
            <div className="div-context">
                <Navegacion nav={nav} setNav={setNav} />
                <h1>PROTECCIÓN A TÚ SERVICIO</h1>
                <p>Nuestro personal combinan tareas de</p>
                <p style={{ fontSize: '30px'}}>seguridad, sistema y salud</p>
                <div className="cont-botton">
                    <Link href="/unetenos"><Botones nombre="Unetenos" /></Link>
                    <Link href="/servicios"><Botones nombre="Nuestros servicios" /></Link>
                </div>
            </div>
            <div className="filtroN"></div>

            <div className="openClose" onClick={openClose} ref={openCloseRef}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
            </div>
        </>
    );
}

export default page;