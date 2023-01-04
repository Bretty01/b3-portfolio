import "./Contact.scss"
const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <form method="post" action="emailhandle.php">
                <input type="text" name="Name" placeholder="Enter your name here..."/>
                <input type="email" name="Email" placeholder="Enter your email here..."/>
                <textarea name="Message" placeholder="Message content"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Contact