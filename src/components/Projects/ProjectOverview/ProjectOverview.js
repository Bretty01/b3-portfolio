import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {motion} from 'framer-motion'
import "./ProjectOverview.scss"
const ProjectOverview = (props) => {
    const defaultSkills = [
        "React",
        "Javascript",
        "HTML5",
        "CSS3",
        "Ruby on Rails"
    ]
    return (
        <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0}}
            exit={{ x: 2000 }}
            transition={{duration: 0.5}}
            className="project-overview">
            <div className="overview-header" onClick={() => props.setOverview(false)}>
                <ArrowBackIcon />
                <h3>{props.title || "Unnamed Project"}</h3>
            </div>
            <div className="overview-body">
                <div>
                    <img alt="Desktop" src={props.desktopImages}/>
                    {props.mobileImages && (<img alt="Mobile" src={props.mobileImages}/>)}
                </div>
                <div>
                    <div className="overview-description">{props.longDescription || "Lorem ipsum dolor sit amet, " +
                        "consectetur adipiscing elit. Aenean pulvinar consequat neque, non placerat augue laoreet eget." +
                        " In ut mi sollicitudin, lacinia magna non, scelerisque elit. Integer ullamcorper erat id" +
                        " neque interdum convallis. Nulla id dapibus magna. Curabitur sit amet finibus ex. Aliquam" +
                        " a erat a ligula accumsan rutrum. Cras tincidunt diam ex, et elementum erat efficitur quis." +
                        " Mauris ac orci nec mauris molestie dictum. In pretium erat id odio gravida dictum. " +
                        "Donec convallis consectetur nisl, eget ornare est tempor eu."}</div>
                    <div className="overview-skills">
                        {props.skills ? props.skills.map(skill => {
                            return <div className="skill-bubble" key={skill}>{skill}</div>})
                        : defaultSkills.map(skill => {
                            return <div className="skill-bubble" key={skill}>{skill}</div>})
                        }
                    </div>
                    <div className="overview-links">
                        <a href={props.buttons?.github}><button disabled={!props.buttons?.github}>
                            Github Page</button></a>
                        <a href={props.buttons?.website}><button disabled={!props.buttons?.website}>
                            Access Site</button></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default ProjectOverview