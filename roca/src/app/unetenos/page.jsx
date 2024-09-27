"use client"
import "./page.css"
import { stateCentral } from "../STATECENTRAL";
import { useReducer } from "react";
import { reducerForm } from "./reducerAction/reducer";
import FormUnetenos from "./FormUnetenos";
import { UNETENOSTYPE } from "./reducerAction/action";
import BackgroundUpdater from "../../../helpers/backgroundUpdater";
import Link from "next/link";
import ArrowBack from "../arrowBack";

const Unetenos = () => {
    const [state, dispatch] = useReducer(reducerForm, stateCentral)

    const createForm = (data) => {
        dispatch({ type: UNETENOSTYPE.CREATEFORM, payload: data })

    }

    const deleForm = () => { }

    const updateForm = () => { }

    // Cambia fondo y elimina al salir
    BackgroundUpdater('fondoForm.jpg')

    return (
        <>
        <ArrowBack url={"/"}/>
        <div>
            <FormUnetenos createForm={createForm} state={state} />
        </div>
        </>
    );
}
export default Unetenos;