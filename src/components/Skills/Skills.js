import {useState} from 'react'
import SkillStamp from "../SkillStamp/SkillStamp"
import React from "../Icons/React/React"
import Redux from "../Icons/Redux/Redux"
import CSS3 from "../Icons/CSS3/CSS3"
import HTML5 from "../Icons/HTML5/HTML5"
import Bootstrap from "../Icons/Bootstrap/Bootstrap"
import JQuery from "../Icons/JQuery/JQuery"
import MongoDB from "../Icons/MongoDB/MongoDB"
import NodeJS from "../Icons/NodeJS/NodeJS"
import REST from "../Icons/REST/REST"
import PHP from "../Icons/PHP/PHP"
import GraphQL from "../Icons/GraphQL/GraphQL"
import Laravel from "../Icons/Laravel/Laravel"
import Javascript from "../Icons/Javascript/Javascript"
import Java from "../Icons/Java/Java"
import Kotlin from "../Icons/Kotlin/Kotlin"
import C from "../Icons/C/C"
import CSharp from "../Icons/CSharp/CSharp"
import Swift from "../Icons/Swift/Swift"
import NPM from "../Icons/NPM/NPM"
import Git from "../Icons/Git/Git"
import Github from "../Icons/GitHub/Github"
import AWS from "../Icons/AWS/AWS"
import Jest from "../Icons/Jest/Jest"
const Skills = () => {
    const tab1 = [
        {title: "React", image: <React />},
        {title: "Redux", image: <Redux />},
        {title: "CSS3", image: <CSS3 />},
        {title: "HTML5", image: <HTML5 />},
        {title: "Bootstrap", image: <Bootstrap />},
        {title: "JQuery", image: <JQuery />}
    ]
    const tab2 = [
        {title: "MongoDB", image: <MongoDB />},
        {title: "NodeJS", image: <NodeJS />},
        {title: "REST", image: <REST />},
        {title: "PHP", image: <PHP />},
        {title: "GraphQL", image: <GraphQL />},
        {title: "Laravel", image: <Laravel />}
    ]
    const tab3 = [
        {title: "Javascript", image: <Javascript />},
        {title: "Java", image: <Java />},
        {title: "Kotlin", image: <Kotlin />},
        {title: "C", image: <C />},
        {title: "C#", image: <CSharp />},
        {title: "Swift", image: <Swift />}
    ]
    const tab4 = [
        {title: "NPM", image: <NPM />},
        {title: "Git", image: <Git />},
        {title: "Github", image: <Github />},
        {title: "AWS", image: <AWS />},
        {title: "Jest", image: <Jest />}
    ]
    const [currentTab, setTab] = useState(tab1)
    return (
        <div>
            <div className="tab-head">
                <button onClick={() => {setTab(tab1)}}>Frontend</button>
                <button onClick={() => {setTab(tab2)}}>Backend</button>
                <button onClick={() => {setTab(tab3)}}>Languages</button>
                <button onClick={() => {setTab(tab4)}}>Tools</button>
            </div>
            <div className="tab-body">
                {currentTab.map(tab => {
                    return <SkillStamp title={tab.title} image={tab.image} key={tab.title}/>
                })}
            </div>
        </div>
    )
}
export default Skills