import * as emailjs from "@emailjs/browser";

/**
 * Function: handEmail
 * Purpose: Takes information and sends it to create an email to be sent to me
 * @param fromName Name of the sender
 * @param fromEmail Email of the sender
 * @param fromMessage Message that the sender submitted
 * @returns {text: string, status: number} status: A status number that determines if
 * the submission was successful.
 * text: The message to correspond to the status code for more context.
 */
const handleEmail = async (fromName, fromEmail, fromMessage) => {
    const EMAIL_FORMAT = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
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