import { UNETENOSTYPE } from "./action";

export const reducerForm=(state, action)=>{
    switch(action.type){
        case UNETENOSTYPE.CREATEFORM:{
            return state={
                empleados: [...state.empleados, action.payload]
            }
        }
        default: state

    }
}