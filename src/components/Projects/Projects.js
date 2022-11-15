import {useState, useEffect} from 'react'
import ProjectList from './ProjectList/ProjectList'
import ProjectOverview from './ProjectOverview/ProjectOverview'
const Projects = () => {
    const [isOverview, setOverview] = useState(false)
    const [overviewData, setData] = useState(null)
    useEffect(() => {
        if(!isOverview){
            setData(null)
        }
    }, [isOverview])
    return (
        <div>
            <h1>Projects</h1>
            {!isOverview ? <ProjectList setOverview={setOverview} setData={setData}/> :
                <ProjectOverview setOverview={setOverview}
                    title={overviewData.title}
                    longDescription={overviewData.longDescription}
                    skills={overviewData.skills}
                    mobileImages={overviewData.mobileImages}
                    desktopImages={overviewData.desktopImages}
                    buttons={overviewData.buttons}/>}
        </div>
    )
}
export default Projects