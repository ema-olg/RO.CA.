import ArrowBack from "../arrowBack";
import "./page.css"
import Image from "next/image";
const Servicios = () => {

    return (
        <>
        <ArrowBack url="/"/>
            <div className="box-cont-texto">
                <div className="cont-title">
                    <h1 className="title">NUESTROS SERVICIOS</h1>
                </div>
                <div className="cont-items">
                        <h4>CUSTODIO VIP</h4>
                        <h4>CHOFER CUSTODIO</h4>
                        <h4>SEGURIDAD PARA CASA DE FAMILIA</h4>
                        <h4>SEGURIDAD PARA EDIFICIOS</h4>
                        <h4>SEGURIDAD PARA COUNTRY</h4>
                        <h4>SEGURIDAD PARA EVENTOS DEPORTIVOS</h4>
                        <h4>SEGURIDAD PARA EMPRESAS ESPESIFICAS</h4>
                        <h4>COLOCACION DE CAMARAS Y CONTROL DE ACCESO</h4>
                </div>
            </div>
            <div className="box-cont-img">
                    <Image className="image" src={"/imgServicios/img-paramedico.jpg"} alt="Img" width={240} height={450} priority={true} />
                    <Image className="image" src={"/imgServicios/img-guardia.jpg"} alt="Img" width={240} height={450} priority={true} />
                    <Image className="image imgT" src={"/imgServicios/img-tecnico.jpg"} alt="Img" width={240} height={450} priority={true} />
            </div>
        </>
    );
}

export default Servicios;