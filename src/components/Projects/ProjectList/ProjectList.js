import projectInfo from "../ProjectInfo"
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import "./ProjectList.scss"
import CovetedCow from "../../Icons/ProjectLogos/CovetedCow"
import PaintBrush from "../../Icons/ProjectLogos/PaintBrush"
const ProjectList = (props) => {
    const svgLinks = [
        <CovetedCow />,
        <PaintBrush />
    ]

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
                        {svgLinks[project.logoLink]}
                        <div>
                            <h3 className="project-name"><strong>{project.name}</strong></h3>
                            <p>{project.shortDescription}</p>
                        </div>

                    </div>

                )
            })}
        </motion.div>
    )
}
export default ProjectList