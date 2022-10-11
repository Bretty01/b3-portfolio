import "./Navigation.scss"
const Navigation = (props) => {
    console.log(props)
    return (
        <div className="nav">
            <div>
                <h2 onClick={() => props.navrefs[0].current?.scrollIntoView()}>About</h2>
                <h2 onClick={() => props.navrefs[1].current?.scrollIntoView()}>Skills</h2>
                <h2 onClick={() => props.navrefs[2].current?.scrollIntoView()}>Projects</h2>
            </div>
        </div>
    )

}
export default Navigation