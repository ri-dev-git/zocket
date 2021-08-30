
import illustration from "./icons/Illustration.svg";
import shape from "./icons/Shape.svg";
import "./css/banner.css"
const Banner = () => {
    return (
        <div >
            <div className="banner">FACEBOOK ADS IN 30 SECONDS</div>
            <div className="bann-bott">Create stunning ad copy incredibly fast and skyrocket your digital business.</div> 
            <img src={illustration} alt="" className="illustartion"/>   
            <img src={shape} alt="" className="shape"/>    
        </div>    
    )
}

export default Banner
