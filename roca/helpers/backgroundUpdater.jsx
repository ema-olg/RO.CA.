import { useEffect } from "react";

const BackgroundUpdater=(url)=>{

    useEffect(() => {
        document.body.style.backgroundImage= `url(/${url})`
        document.body.style.backgroundSize= 'cover'
        document.body.style.backgroundPosition= 'center'
        document.body.style.backgroundRepeat= 'no-repeat'
        document.body.style.backgroundAttachment= 'fixed'
        document.body.style.height= '100vh'
        return()=> document.body.style.backgroundImage= 'none'
    }, []);
    
}

export default BackgroundUpdater;