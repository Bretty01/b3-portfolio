import "./SkillStamp.scss"

const SkillStamp = (props) => {


    return (
        <div className="skill-stamp">
            {props.image}
            <span>{props.title}</span>
        </div>
    )
}
export default SkillStamp