import projectInfo from "../ProjectInfo"
import {useEffect, useState} from 'react'
import "./ProjectList.scss"
const ProjectList = (props) => {
    useEffect(() => console.log(projectInfo), [])
    return (
        <div id="project-list">
            {projectInfo.map(project => {
                return (
                    <div className="thumbnail" onClick={() => {
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
        </div>
    )
}
export default ProjectList