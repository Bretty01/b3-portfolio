import "./Navigation.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useRef} from 'react'
AOS.init();
const Navigation = (props) => {
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const isInViewport = (index) => {
        const rect = props.navrefs[index].current?.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= ((window.innerHeight + (rect.bottom - rect.top)) ||
                document.documentElement.clientHeight  + (rect.bottom - rect.top)) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }

    useEffect(() => {
        document.addEventListener('scroll', function () {
            if(isInViewport(0)) {
                aboutRef.current.style.backgroundColor = "red"
                skillsRef.current.style.backgroundColor = "darkgrey"
                projectsRef.current.style.backgroundColor = "darkgrey"
            }
            if (isInViewport(1)) {
                aboutRef.current.style.backgroundColor = "darkgrey"
                skillsRef.current.style.backgroundColor = "red"
                projectsRef.current.style.backgroundColor = "darkgrey"
            }
            if(isInViewport(2)) {
                aboutRef.current.style.backgroundColor = "darkgrey"
                skillsRef.current.style.backgroundColor = "darkgrey"
                projectsRef.current.style.backgroundColor = "red"
            }
        })
    }, [])

    return (
        <div className="nav" data-aos="fade-right" data-aos-anchor="#about" data-aos-anchor-placement="center-bottom">
            <div>
                <h2 onClick={() => props.navrefs[0].current?.scrollIntoView()} ref={aboutRef}>About</h2>
                <h2 onClick={() => props.navrefs[1].current?.scrollIntoView()} ref={skillsRef}>Skills</h2>
                <h2 onClick={() => props.navrefs[2].current?.scrollIntoView()} ref={projectsRef}>Projects</h2>
            </div>
        </div>
    )

}
export default Navigation