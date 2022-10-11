import "./SkillStamp.scss"

const SkillStamp = (props) => {


    return (
        <div className="skill-stamp">
            <img src={props.image} alt="skill"/>
            <p>{props.title}</p>
        </div>
    )
}
export default SkillStamp