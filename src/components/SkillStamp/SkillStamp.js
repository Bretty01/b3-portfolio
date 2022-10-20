import "./SkillStamp.scss"

const SkillStamp = (props) => {


    return (
        <div className="skill-stamp">
            {props.image}
            <p>{props.title}</p>
        </div>
    )
}
export default SkillStamp