import * as emailjs from "@emailjs/browser";
//If error, return {status: 400, text: {errorMessage}}

const handleEmail = async (fromName, fromEmail, fromMessage) => {
    const EMAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!fromName || !fromEmail || !fromMessage) {
        return {status: 400, text: "One or more of the text boxes has not been filled out. Please fill all text boxes."}
    }
    if(!fromEmail.match(EMAIL_FORMAT)) {
        return {status: 400, text: "The submitted email is not in the proper email format. Please fix your email."}
    }
    return await emailjs.send("service_i1upsuk","template_crcjkrm",{
        from_name: fromName,
        reply_to: fromEmail,
        message: fromMessage,
    }, "W3jRdeOq4E_4oyLFE")
}
export default handleEmail