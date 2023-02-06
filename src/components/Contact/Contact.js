import "./Contact.scss"
import handleEmail from "./handleEmail"
import { useState } from 'react'
import Loading from "../Icons/Loading";
const Contact = () => {
    const [isProcessing, setProcessing] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    async function submitEmail(e) {
        e.preventDefault()
        setProcessing(true)
        let status = await handleEmail(e.target[0].value, e.target[1].value, e.target[2].value)
        if(status.status === 200) {
            setSuccess(true)
        }
        setErrorMessage(status.text)
        setProcessing(false)
    }

    return (
        <div>
            <h1>Contact Me</h1>
            <p className="section-description">Let's connect! Use the form below to send me a message. I'll be sure
            to get back to you!</p>
            {isSuccess ?
                (
                    <div className="success-message">
                        <img src="/checkmark.svg" alt="checkmark"/>
                        Your message has been successfully sent. Thank you for contacting! I will get back to you as
                        soon as I possibly can.
                    </div>
                ):(
                    <div>
                        <form onSubmit={(e) => submitEmail(e)}>
                            <input type="text" name="name" placeholder="Enter your name here..." required/>
                            <input type="email" name="email" placeholder="Enter your email here..." required/>
                            <textarea name="message" placeholder="Message content" required/>
                            <input type="submit" value="Submit"/>
                            {errorMessage && (<strong><span className="error-message">{"Unable to process the email request: "
                                + errorMessage}</span></strong>)}
                        </form>
                        {isProcessing && (
                            <div className="loading-block">
                                <Loading />
                            </div>
                        )}
                    </div>
                )}
        </div>
    )
}
export default Contact