import {useState} from 'react'
import ProjectList from './ProjectList/ProjectList'
import ProjectOverview from './ProjectOverview/ProjectOverview'
const Projects = () => {
    const [isOverview, setOverview] = useState(false)
    return (
        <div>
            <h1>Projects</h1>
            {!isOverview ? <ProjectList setOverview={setOverview}/> : <ProjectOverview setOverview={setOverview}/>}
        </div>
    )
}
export default Projects