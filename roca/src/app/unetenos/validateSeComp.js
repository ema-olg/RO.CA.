const seComp = (value) => {
    if(value.toLowerCase() === "si".toLowerCase()){
        return true
    }else if(value.toLowerCase() === "no".toLowerCase()){
        return 'Debes tener el secundario completo'
    }else{
        return 'Debes contestar con "SI" o "NO"'
    }
}
export default seComp;
