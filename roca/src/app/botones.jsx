import "./botones.css"

const Botones=(prop)=>{
    const {nombre}=prop
    
    return (
        <>
        <button>{nombre}</button>
        </>
    );
}

export default Botones;