import {useState} from 'react'
import "./Skills.scss"
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
import {motion} from "framer-motion"
const Skills = () => {
    //Standard variables
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

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    //useState variables
    const [currentTab, setTab] = useState(tab1)

    const SkillSection = (props) => {
        return (
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}

                className="skill-section">
                <h2>{props.header}</h2>
                {props.section.map(stamp => {
                    return (
                        <SkillStamp title={stamp.title} image={stamp.image} key={stamp.title}/>
                    )
                })}
            </motion.div>
        )
    }
    return (
        <div>
            <h1>Skills</h1>
            <SkillSection header="Frontend" section={tab1}/>
            <SkillSection header="Backend" section={tab2}/>
            <SkillSection header="Languages" section={tab3}/>
            <SkillSection header="Tools" section={tab4}/>
        </div>
    )
}
export default Skills