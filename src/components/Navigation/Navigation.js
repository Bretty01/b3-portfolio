import "./Navigation.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Socials from "../Socials/Socials";
import B3Logo from "../Icons/B3Logo/B3Logo";
const Navigation = (props) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const navSectionRef = useRef(null);
  const navBlockRef = useRef(null);
  /**
   * Function: isInViewport
   * Purpose: Check if the section submitted is in sight of the user and return a boolean based on result.
   * @param index Which section that relates to the nav that is to be checked.
   * @returns {boolean} Returns if the section is in sight of the viewport. True if it is in viewport, false if not.
   */
  const isInViewport = (index) => {
    //Get the rectangle section and compare it to the main window.
    const rect = props.navrefs[index]?.current?.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight + (rect.bottom - rect.top) ||
          document.documentElement.clientHeight +
            (rect.bottom - rect.top - 500)) &&
      Math.floor(rect.right) <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const changeNavAnimation = () => {
    if (window.innerWidth < 768) {
      navSectionRef.current.setAttribute("data-aos", "fade-down");
      navBlockRef.current.className = "nav";
      navBlockRef.current.setAttribute("data-aos", "");
    } else {
      navSectionRef.current.setAttribute("data-aos", "fade-right");
      navBlockRef.current.className = "nav aos-init";
      navBlockRef.current.setAttribute("data-aos", "fade-right");
    }
    AOS.refresh();
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.addEventListener("scroll", function () {
      //TODO: Below can probably be optimised a lot better.
      if (isInViewport(0)) {
        aboutRef.current.className = "active";
        skillsRef.current.className = "";
        projectsRef.current.className = "";
        contactRef.current.className = "";
      }
      if (isInViewport(1)) {
        aboutRef.current.className = "";
        skillsRef.current.className = "active";
        projectsRef.current.className = "";
        contactRef.current.className = "";
      }
      if (isInViewport(2)) {
        aboutRef.current.className = "";
        skillsRef.current.className = "";
        projectsRef.current.className = "active";
        contactRef.current.className = "";
      }
      if (isInViewport(3)) {
        aboutRef.current.className = "";
        skillsRef.current.className = "";
        projectsRef.current.className = "";
        contactRef.current.className = "active";
      }
    });
    window.addEventListener("resize", changeNavAnimation);
    changeNavAnimation();
    props.navrefs[0].current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="nav"
      ref={navBlockRef}
      data-aos="fade-right"
      data-aos-anchor="#about"
      data-aos-anchor-placement="center-bottom"
    >
      <B3Logo
        onClick={() =>
          props.navrefs[4].current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div
        ref={navSectionRef}
        data-aos="fade-right"
        data-aos-anchor="#about"
        data-aos-anchor-placement="center-bottom"
      >
        <h2
          onClick={() =>
            props.navrefs[0].current?.scrollIntoView({ behavior: "smooth" })
          }
          ref={aboutRef}
        >
          About
        </h2>
        <h2
          onClick={() =>
            props.navrefs[1].current?.scrollIntoView({ behavior: "smooth" })
          }
          ref={skillsRef}
        >
          Skills
        </h2>
        <h2
          onClick={() =>
            props.navrefs[2].current?.scrollIntoView({ behavior: "smooth" })
          }
          ref={projectsRef}
        >
          Projects
        </h2>
        <h2
          onClick={() =>
            props.navrefs[3].current?.scrollIntoView({ behavior: "smooth" })
          }
          ref={contactRef}
        >
          Contact
        </h2>
      </div>
      <Socials
        data-aos="fade-up"
        data-aos-anchor="#about"
        data-aos-anchor-placement="center-bottom"
      />
    </div>
  );
};
export default Navigation;
