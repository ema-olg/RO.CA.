const priAux = (value) => {
    if(value.toLowerCase() === "si".toLowerCase()){
        return true
    }else if(value.toLowerCase() === "no".toLowerCase()){
        return 'Debes tener un curso de primeros auxilios'
    }else{
        return 'Debes contestar con "SI" o "NO"'
    }
}
export default priAux;
