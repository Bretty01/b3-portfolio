import logo from './logo.svg';
import './App.scss';
import {useRef} from "react"
import Skills from "./components/Skills/Skills"
import Navigation from "./components/Navigation/Navigation"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function App() {
    const handleEmail = (e) => {
        e.preventDefault()
        console.log("Hi, I should do something about this.")
    }

    const handleScroll = event => {
        console.log(event)
    }

  const navRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null)
  ]

  return (
    <div className="main">
        <Navigation navrefs={navRefs}/>
        <div className="landing">
            <div>
                <h1>Brett Orban<strong>.</strong></h1>
                <h2>Success Through Hard Work and Dedication!</h2>
            </div>
            <h3>Full Stack Developer <strong>|</strong> Software Developer <strong>|</strong> Fun Guy</h3>
            <div className="social-icons">
                <GitHubIcon />
                <LinkedInIcon />
                <ArticleIcon />
            </div>
        </div>
        <div id="main-content">
            <div id="about" ref={navRefs[0]}>
                <h2>The name is <strong>Brett</strong>! Welcome aboard!</h2>
                <span>I'm a <strong>Full Stack Developer</strong> born and raised in Regina, Saskatchewan. While I
                have grown up with a love for technology, I have further appreciated the art of web and software
                through both the creativity and problem solving that programming offers.<br /><br />

                I am always excited to learn new skills and refine my existing skills to further improve myself and
                the people around me. Take a look around and see what I have to offer. Maybe you will get a good
                impression and be inspired!
                </span>
            </div>
            <div id="skills" ref={navRefs[1]}  onScroll={handleScroll}>
                <Skills />
            </div>
            <div id="projects" ref={navRefs[2]}>
                <h1>Projects</h1>
                <div>
                    <p className="projects-link">Coveted Cow</p>
                    <p className="projects-link">Coveted Cow</p>
                    <p className="projects-link">Coveted Cow</p>
                    <p className="projects-link">Coveted Cow</p>
                </div>
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
    </div>
  );
}

export default App;
