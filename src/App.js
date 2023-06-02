import "./App.scss";
import { useRef, useState } from "react";
import Skills from "./components/Skills/Skills";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import WebSVG from "./components/Icons/WebSVG/WebSVG";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Socials from "./components/Socials/Socials";
import CustomScrollbar from "./components/CustomScrollbar/CustomScrollbar";
import Contact from "./components/Contact/Contact";
import "simplebar-react/dist/simplebar.min.css";
import TransitionWave from "./components/TransitionWave/TransitionWave";

function App() {
  //useState variables
  const [showContent, setShow] = useState(false);
  //useRef variables
  const navRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const arrowRef = useRef(null);

  //Shows the main content div and hides the arrow prompt on the landing page.
  const showMainContent = () => {
    setShow(true);
    arrowRef.current.style.opacity = "0";
  };

  return (
    <CustomScrollbar showContent={showContent}>
      <div className="main">
        <div
          ref={navRefs[4]}
          className="landing"
          style={{ marginBottom: showContent ? "100px" : 0 }}
        >
          <div className="landing-title">
            <h2>
              <strong>Web & Applications Developer</strong>
            </h2>
            <h1>Brett Orban</h1>
            <span><i><u>Transforming productivity through meaningful resolutions.</u></i></span>
          </div>
          <div
            id="display-main-content"
            ref={arrowRef}
            onClick={() => showMainContent()}
          >
            <span>Click here to continue!</span>
            <ArrowDownwardIcon />
          </div>
          <Socials />
        </div>
        {showContent && (
          <div id="main-content">
            <Navigation navrefs={navRefs} />
            <div id="about" ref={navRefs[0]}>
              <h2>
                The name is <strong>Brett</strong>! Welcome aboard!
              </h2>
              <div>
                <WebSVG />
                <span>
                  Life throws us <strong>problems</strong> all the time in all aspects of life. It can the the smallest
                  programming issues like forgetting a semicolon on a simple line of code, or it can be the big business
                  issues like <strong>analyzing</strong> where the big trends are taking us and executing on a plan. We
                  never know where the next day takes us, so you must always make sure <strong>you have the right
                  person</strong>.
                  <br /><br />
                  Being a <strong>developer</strong> is not just about creating code, it's about taking any problem that
                  is thrown at you, understanding the cause, planning a resolution, and executing on it. I firmly
                  believe that such a simple concept can be applied to so many aspects of life and it can keep our
                  society running as smoothly as possible. I love <strong>programming</strong> because problem solving
                  is a big part of who I am.
                  <br /><br />
                  Life is a rollercoaster with unexpected loops and sharp turns,
                  <strong> and I am loving the ride!</strong>
                </span>
              </div>
            </div>
            <TransitionWave />
            <div id="skills" ref={navRefs[1]}>
              <Skills />
            </div>
            <TransitionWave inverse={true} />
            <div
              id="projects"
              ref={navRefs[2]}
              style={{ backgroundColor: "var(--basic-dark)" }}
            >
              <Projects />
            </div>
            <TransitionWave />
            <div
              id="contact"
              ref={navRefs[3]}
              style={{ backgroundColor: "var(--accent-dark)" }}
            >
              <Contact />
            </div>
          </div>
        )}
      </div>
    </CustomScrollbar>
  );
}

export default App;
