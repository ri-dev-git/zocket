import vector from "./Vector.svg"
const tmsContent = (props) => {
    return (
        <div className={props.content.className}>
            <img className="tmsIcons" src={require(`${props.content.img}`).default} alt="icons"/>
            <div className="adtitle">{props.content.adTitle}</div>
            <div className="content">{props.content.content}</div>
            <div className="explore">Explore<img src={vector} alt="->"className="vector"/></div>
        </div>
    )
}

export default tmsContent
