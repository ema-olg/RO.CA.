import { useForm } from "react-hook-form";
import "./FormUnetenos.css"
import { useEffect } from "react";
import Botones from "../botones";
import seComp from "./validateSeComp";
import priAux from "./validatePriAux";
import { useRouter } from "next/navigation";

const initialForm = {
    nombre: "",
    apellido: "",
    edad: "",
    dni: "",
    secundarioCompleto: "",
    primerosAuxilios: ""
}

const FormUnetenos = (prop) => {
    const router = useRouter()

    const { createForm, state } = prop

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // creamos hora y fecha actual
    const date = new Date()
    const fechaHora = `Día ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - Hora ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    // número ID
    const numberRandomID = () => Math.random().toString(36).slice(2,9)

    const onsubmit = (data) => {
        // En las siguinter 2 lineas agregamos fecha y hora y un n° de ID
        data.dayLogIn = fechaHora
        data.id = numberRandomID()
        // creamos el usuario y lo guardamos en el estado central
        createForm(data)
        // guardamos en el  localStorage N° de DNI y N° de ID para posterior usos
        localStorage.setItem('usuario', JSON.stringify({ dni: data.dni, id: data.id }))
        // reseteamos el formulario
        reset(initialForm)
        // Al enviar el formulario volvemos  a Home
        router.push('/')
    }

    useEffect(() => {
        console.log(state)
    }, [state]);


    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)}>
                {/* NOMBRE  */}
                <div className="divText">
                    {errors.nombre?.type === "required" && <p className="errors">Falta agragar tu Nombre</p>}
                    <input type="text" placeholder="Nombre" className="Itext"{...register('nombre', {
                        required: true
                    })} />
                </div>
                {/* APELLIDO */}
                <div className="divText">
                    {errors.apellido?.type === "required" && <p className="errors">Falta agregar tu Apellido</p>}
                    <input type="text" placeholder="Apellido" className="Itext"{...register('apellido', {
                        required: true
                    })} />
                </div>
                {/* FOTO PERSONAL */}
                {/* <div>
                    {errors.foto?.type === "required" && <p className="errors">Agrega tu foto de cuarpo entero con fondo uniforme</p>}
                    <label htmlFor="foto">Foto personal</label>
                    <input type="file" id="foto" placeholder="foto"{...register('foto', {
                        required: true
                    })} />
                </div> */}
                {/* EDAD  */}
                <div className="divText">
                    {errors.edad?.type === "min" && <p className="errors">Debes ser mayor de 21 años para unirtenos</p>}
                    {errors.edad?.type === "required" && <p className="errors">Falta agragar tu Edad</p>}
                    <input type="number" placeholder="Edad" className="Itext"{...register('edad', {
                        required: true,
                        min: 21
                    })} />
                </div>
                {/* N° DE DNI */}
                <div className="divText">
                    {errors.dni?.type === "required" && <p className="errors">Falta tu número de DNI</p>}
                    {errors.dni?.type === "max" && <p className="errors">Agregar un N° de DNI valido</p>}
                    {errors.dni?.type === "min" && <p className="errors">Agregar un N° de DNI valido</p>}
                    <input type="number" placeholder="N° de DNI" className="Itext"{...register('dni', {
                        required: true,
                        max: 40000000,
                        min: 15000000
                    })} />
                </div>
                {/* SECUNDARIO COMPLETO */}
                <div className="divText">
                    {errors.secundarioCompleto?.type === "required" && <p className="errors">Falta contestar</p>}
                    {errors.secundarioCompleto?.type === "validate" && <p className="errors">{errors.secundarioCompleto.message}</p>}
                    <input type="text" placeholder="Secundario Completo" className="Itext"{...register('secundarioCompleto', {
                        validate: seComp,
                        required: true
                    })} />
                </div>

                {/* PRIMEROS AUXILIOS */}
                <div className="divText">
                    {errors.primerosAuxilios?.type === "required" && <p className="errors">Falta contestar</p>}
                    {errors.primerosAuxilios?.type === "validate" && <p className="errors">{errors.primerosAuxilios.message}</p>}
                    <input type="text" placeholder="Primeros Auxilios" className="Itext"{...register('primerosAuxilios', {
                        validate: priAux,
                        required: true
                    })} />
                </div>


                <Botones nombre={"Enviar"} />
            </form>
        </>
    );
}
export default FormUnetenos;