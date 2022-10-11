import logo from './logo.svg';
import './App.scss';
import {useRef} from "react"
import SkillStamp from "./components/SkillStamp/SkillStamp"
import Navigation from "./components/Navigation/Navigation"
function App() {

    const handleScroll = event => {
        console.log(event)
    }

  const navRefs = [
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
        </div>
        <div className="main-content">
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
                <div>
                    <div className="tab-head">
                        <button>Frontend</button>
                        <button>Backend</button>
                        <button>Languages</button>
                        <button>Tools</button>
                    </div>
                    <div className="tab-body">
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <SkillStamp title="React" image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    </div>
                </div>
            </div>
            <div id="projects" ref={navRefs[2]}>
                <h1>Projects</h1>
                <div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
