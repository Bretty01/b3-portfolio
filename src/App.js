import logo from './logo.svg';
import './App.scss';
import {useRef, useEffect, useState} from "react"
import Skills from "./components/Skills/Skills"
import Navigation from "./components/Navigation/Navigation"
import Projects from "./components/Projects/Projects"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import WebSVG from "./components/Icons/WebSVG/WebSVG"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
    const [showContent, setShow] = useState(false)
    const navRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]
    const arrowRef = useRef(null)
    const showMainContent = () => {
        setShow(true)
        arrowRef.current.style.opacity = "0"
    }

    const handleEmail = (e) => {
        e.preventDefault()
        console.log("Hi, I should do something about this.")
    }


  return (
    <div className="main">

        <div className="landing">
            <div>
                <h1>Brett Orban<strong>.</strong></h1>
                <h2>Success Through Hard Work and Dedication!</h2>
            </div>
            <h3>Full Stack Developer <strong>|</strong> Software Developer <strong>|</strong> Fun Guy</h3>
            <ArrowDownwardIcon ref={arrowRef} onClick={() => showMainContent()}/>
            <div className="social-icons">
                <a href="https://github.com/Bretty01">
                    <GitHubIcon />
                    <div className="speech-bubble">
                        Github
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/brett-orban-93994324a/">
                    <LinkedInIcon />
                    <div className="speech-bubble">
                        LinkedIn
                    </div>
                </a>
                <a href="https://www.google.ca">
                    <ArticleIcon />
                    <div className="speech-bubble">
                        Resume
                    </div>
                </a>
            </div>
        </div>
        {showContent &&
            <div id="main-content">
                <Navigation navrefs={navRefs}/>
                <div id="about" ref={navRefs[0]}>
                    <h2>The name is <strong>Brett</strong>! Welcome aboard!</h2>
                    <div>
                        <WebSVG />
                        <span>I'm a <strong>Full Stack Developer</strong> born and raised in Regina, Saskatchewan. While I
                    have grown up with a love for technology, I have further appreciated the art of web and software
                    through both the creativity and problem solving that programming offers.<br /><br />

                    I am always excited to learn new skills and refine my existing skills to further improve myself and
                    the people around me. Take a look around and see what I have to offer. Maybe you will get a good
                    impression and be inspired!
                    </span>
                    </div>
                </div>
                <div id="skills" ref={navRefs[1]}>
                    <Skills />
                </div>
                <div id="projects" ref={navRefs[2]}>
                    <Projects />
                </div>
                <div id="contact" ref={navRefs[3]}>
                    <h1>Contact Me</h1>
                    <form onSubmit={handleEmail}>
                        <input type="text" placeholder="Enter your name here..."/>
                        <input type="email" placeholder="Enter your email here..."/>
                        <textarea placeholder="Message content"/>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
}
    </div>
  );
}

export default App;
