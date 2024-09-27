import "./arrowBack.css"
import Link from "next/link";

const ArrowBack=(prop)=>{
    const {url}= prop
    return (
        <>        
        <div className="divBack">
            <Link href={url}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" /></svg></Link>   
        </div>
        </>
    );
}

export default ArrowBack;