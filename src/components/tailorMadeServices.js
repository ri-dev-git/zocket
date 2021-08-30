
import TmsContent from "./tms-contents/tmsContent";
import tmsData from './tms-contents/tmsData';
import './css/tms.css';

const TailorMadeServices = () => {
    const tmsCon=tmsData.map(content=>
        <TmsContent 
        key={content.className}
        content={content}/>)
    return (
            <div className="container">
                <div className="tmservices" id="services">Tailor-made Services</div>
                    {tmsCon}
            </div>
    )
}

export default TailorMadeServices
