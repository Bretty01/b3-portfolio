import "./SkillStamp.scss"
import {motion} from "framer-motion"
const SkillStamp = (props) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div className="skill-stamp" variants={item}>
            {props.image}
            <span>{props.title}</span>
        </motion.div>
    )
}
export default SkillStamp