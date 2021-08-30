
const testimonies = (props) => {
    return (
        <div >
            <div className={props.testmon.className}>
                <div className="testTitle">{props.testmon.title}</div>
                <div className="testiContent">{props.testmon.content}</div> 
                <img src={require(`${props.testmon.img}`).default} alt="/" className="tImage"/>
                <p className="tName">{props.testmon.name}</p>
                <p className="profession">{props.testmon.profession}</p>
            </div>
        </div>
    )
}

export default testimonies
