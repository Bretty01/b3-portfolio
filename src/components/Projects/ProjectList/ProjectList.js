import projectInfo from "../ProjectInfo"
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import "./ProjectList.scss"
const ProjectList = (props) => {
    return (
        <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0}}
            exit={{ x: 2000 }}
            transition={{duration: 0.5}}
            id="project-list">
            {projectInfo.map(project => {
                return (
                    <div
                        className="thumbnail"
                        key={project.name}
                        onClick={() => {
                        props.setOverview(true)
                        props.setData({
                            title: project.name,
                            longDescription: project.longDescription,
                            skills: project.skills,
                            mobileImages: project.mobileImages,
                            desktopImages: project.desktopImages,
                            buttons: project.buttons
                        })
                    }}>
                        <div className="thumbnail-overlay">
                            <p>{project.name}</p>
                            <p>{project.shortDescription}</p>
                        </div>
                        <div className="thumbnail-icon">
                            <img src={project.logoLink}/>
                        </div>
                    </div>

                )
            })}
        </motion.div>
    )
}
export default ProjectList