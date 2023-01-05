import logo from './logo.svg';
import './App.scss';
import {useRef, useEffect, useState} from "react"
import Skills from "./components/Skills/Skills"
import Navigation from "./components/Navigation/Navigation"
import Projects from "./components/Projects/Projects"
import WebSVG from "./components/Icons/WebSVG/WebSVG"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SimpleBar from 'simplebar-react';
import Socials from "./components/Socials/Socials"
import CustomScrollbar from "./components/CustomScrollbar/CustomScrollbar"
import Contact from "./components/Contact/Contact"
import 'simplebar-react/dist/simplebar.min.css';

function App() {
    //useState variables
    const [showContent, setShow] = useState(false)
    //useRef variables
    const navRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]
    const arrowRef = useRef(null)

    //Shows the main content div and hides the arrow prompt on the landing page.
    const showMainContent = () => {
        setShow(true)
        arrowRef.current.style.opacity = "0"
    }

    const handleEmail = (e) => {
        e.preventDefault()
        console.log("Hi, I should do something about this.")
    }


  return (
      <CustomScrollbar showContent={showContent}>
        <div className="main">
            <div className="landing">
                <div className="landing-title">
                    <h1>Brett</h1>
                    <h1>Orban</h1>
                </div>
                <div id="display-main-content" ref={arrowRef} onClick={() => showMainContent()}>
                    <span>Click here to continue</span>
                    <ArrowDownwardIcon />
                </div>
                <Socials />
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
                        <Contact />
                    </div>
                </div>
    }
        </div>
      </CustomScrollbar>
  );
}

export default App;
