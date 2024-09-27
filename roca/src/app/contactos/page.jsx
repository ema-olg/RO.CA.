import "./page.css"
import Link from "next/link";
import Image from "next/image";
import ArrowBack from "../arrowBack";
const Contactos = () => {

    return (
        <>
        <ArrowBack url={"/"}/>
            <div className="divTitle">
                <h1 className="titleContacto">CONTACTOS</h1>
            </div>

            <div className="white">
            </div>
            <div className="midle">
                
                <Link href={"https://maps.app.goo.gl/tXuKjy6oj8K2mwvf7"} className="link">
                    <div className="cuadrado cuadradoBlack">
                        <h2>Ubicación</h2>
                        <div className="divSVG">
                            <Image src={"/imgIconContact/ubicación.svg"} alt="ubicaciónIcon" width={50} height={50} />
                        </div>
                        <p className="txtP">caracas 1400</p>
                    </div>
                </Link>
                <Link href={"https://wa.me/5493583430765?text=Hola%20RO.CA."} className="link linkBlack">
                    <div className="cuadrado">
                        <h2>WhatsApp</h2>
                        <div className="divSVG">
                            <Image src={"/imgIconContact/whatsApp.svg"} alt="contactoIcon" width={50} height={50} />
                        </div>
                        <p className="txtP">358-3430765</p>
                    </div>
                </Link>

                <Link href={"https://www.instagram.com/ema_07_0/"} className="link">
                    <div className="cuadrado cuadradoBlack">
                        <h2>Instagram</h2>
                        <div className="divSVG">
                            <Image src={"/imgIconContact/instagram.svg"} alt="instagramIcon" width={50} height={50} />
                        </div>
                        <p className="txtP">@ro.ca.</p>
                    </div>
                </Link>

                <Link href={"#"} className="link linkBlack">
                    <div className="cuadrado">
                        <h2>Correo electrónico</h2>
                        <div className="divSVG">
                            <Image src={"/imgIconContact/email.svg"} alt="emailIcon" width={50} height={50} />
                        </div>
                        <p className="txtP">roca@gmail.com</p>
                    </div>
                </Link>

                <Link href={"tel:+5493583430765"} className="link">
                    <div className="cuadrado cuadradoBlack">
                        <h2>Telefono</h2>
                        <div className="divSVG">
                            <Image src={"/imgIconContact/telefono.svg"} alt="telefonoIcon" width={50} height={50} />
                        </div>
                        <p className="txtP">358-3430765</p>
                    </div>
                </Link>

            </div>
            <div className="black"></div>
        </>
    );
}

export default Contactos;