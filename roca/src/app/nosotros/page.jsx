"use client"
import "./page.css"
import BackgroundUpdater from "../../../helpers/backgroundUpdater";
import ArrowBack from "../arrowBack";


const PorqueElegirnos = () => {
    BackgroundUpdater('fondoForm.jpg')

    return (
        <>
            <ArrowBack url={"/"} />
            <h1 id="titleQS">¿Porque Elegirnos?</h1>
            <p className="txtQS">
                "Nuestra empresa de seguridad es como una roca sólida, impenetrable y eterna, que protege tus activos y seres queridos con fuerza y consistencia. Pero también somos como el ave fénix, que renace de las cenizas, vigilante y alerta, listos para adaptarnos a las nuevas amenazas y protegerte en todo momento. Con nuestro equipo de guardias altamente capacitados, te brindamos la tranquilidad de saber que estás protegido por una fortaleza inexpugnable y una vigilancia constante”.
            </p>

            <h2 className="subTitleQS">Misión</h2>
            <p className="txtQS">Posicionarse entre las empresas líderes en servicios de seguridad y vigilancia privada, expandiendo nuestra presencia en el mercado garantizando a nuestros clientes y la comunidad un servicio eficaz y personalizado que les permita acceder a una vida más segura y tranquila.  Nuestra empresa tiene como propósito especializar a nuestro personal, en el área de salud y tecnología, para así demostrar el profesionalismo de cada uno de ellos, y cubrir con el mismo tres funciones: SEGURIDAD, ASISTENCIA DE PRIMEROS AUXILIOS Y MONITOREOS TECNOLOGICOS.
            </p>
            <h2 className="subTitleQS">VISION</h2>
            <p className="txtQS">
                Seguridad Integral y de Resguardo en las diversas entidades públicas y Brindar siempre el mejor servicio de /o privadas a nivel nacional, cumpliendo a cabalidad nuestras funciones en el ámbito de la seguridad, logrando así satisfacer las necesidades y requerimientos de cada uno de nuestros clientes.
            </p>
        </>
    );
}

export default PorqueElegirnos;