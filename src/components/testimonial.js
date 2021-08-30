import "./css/testimonials.css";
import ill from "./icons/ill.svg"
import Testimonies from './testimonies'
import testData from './testData'
;
const testimonial = () => { 
    return (
        <div className="cont">
            <p className="test">Hear It From Them</p>
            <img src={ill} alt="" className="quotes"/>
            {testData.map(testmon=><Testimonies
            key={testmon.className}
            testmon={testmon}/>)}
        </div>
    )
}

export default testimonial
