import "./Navigation.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Navigation = (props) => {
    console.log(props)
    return (
        <div className="nav" data-aos="fade-right" data-aos-anchor="#main-content" data-aos-anchor-placement="top-bottom">
            <div>
                <h2 onClick={() => props.navrefs[0].current?.scrollIntoView()}>About</h2>
                <h2 onClick={() => props.navrefs[1].current?.scrollIntoView()}>Skills</h2>
                <h2 onClick={() => props.navrefs[2].current?.scrollIntoView()}>Projects</h2>
            </div>
        </div>
    )

}
export default Navigation