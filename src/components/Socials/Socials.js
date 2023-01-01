import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import "./Socials.scss"
const Socials = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/Bretty01">
                <GitHubIcon />
                <div className="speech-bubble">
                    Github
                </div>
            </a>
            <a href="https://www.linkedin.com/in/brett-orban-93994324a/">
                <LinkedInIcon />
                <div className="speech-bubble">
                    LinkedIn
                </div>
            </a>
            <a href="https://www.google.ca">
                <ArticleIcon />
                <div className="speech-bubble">
                    Resume
                </div>
            </a>
        </div>
    )
}
export default Socials