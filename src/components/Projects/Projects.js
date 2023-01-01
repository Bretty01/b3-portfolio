import {useState, useEffect} from 'react'
import {AnimatePresence} from "framer-motion"
import ProjectList from './ProjectList/ProjectList'
import ProjectOverview from './ProjectOverview/ProjectOverview'
const Projects = () => {
    //useState variables
    const [isOverview, setOverview] = useState(false)
    const [overviewData, setData] = useState(null)

    //useEffect variables
    useEffect(() => {
        //If the overview component is dismounted, remove the info to reset to a clean state.
        if(!isOverview){
            setData(null)
        }
    }, [isOverview])

    return (
        <div>
            <h1>Projects</h1>
            <AnimatePresence mode="wait">
                {!isOverview ? <ProjectList setOverview={setOverview} setData={setData}/> :
                    <ProjectOverview key={overviewData?.title}
                                     setOverview={setOverview}
                                     title={overviewData?.title}
                                     longDescription={overviewData?.longDescription}
                                     skills={overviewData?.skills}
                                     mobileImages={overviewData?.mobileImages}
                                     desktopImages={overviewData?.desktopImages}
                                     buttons={overviewData?.buttons}/>}
            </AnimatePresence>

        </div>
    )
}
export default Projects