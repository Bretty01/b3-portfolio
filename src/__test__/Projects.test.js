import projectInfo from "../components/Projects/ProjectInfo";
import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Projects from "../components/Projects/Projects";
jest.mock('../components/Projects/ProjectInfo', () => {
    return [
        {
            name: "Mock Project",
            shortDescription:
                "This is a mock project used to mock me",
            longDescription:
                "Well, well, well, look decided to read this mock description. How bold of you to dig through this " +
                "expecting something useful to learn. But jokes on you! The only thing you will learn from reading this " +
                "is that 2 + 2 = 4! Mwahahahahahahahahaha!",
            skills: ["MockDB, MockularJS, CMockS, Mocka"],
            logoLink: 0,
            mobileImages: ["/google-m.png"],
            desktopImages: ["/google-d.png"],
            buttons: {
                github: "https://www.google.ca",
                website: "https://www.google.ca"
            }
        },
        {
                name: "Mock Project 2",
                shortDescription:
                    "This is the second mock project",
                skills: ["MockDB, MockularJS, CMockS, Mocka"],
                logoLink: 0,
                mobileImages: ["/google-m.png"],
                desktopImages: ["/google-d.png"],
                buttons: {
                    github: "https://www.google.ca"
            },
        }]
})

test('mock return of project data', () => {
    const tree = render(<Projects />)
    expect(projectInfo).toHaveLength(2)
    expect(tree).toMatchSnapshot()
})

test('click mock project modal to update Project component to contain ProjectOverview component', async () => {
    const tree = render(<Projects />)
    let modal = screen.queryByText(/This is a mock project used to mock me/i)
    expect(modal).toBeDefined()
    userEvent.click(modal)
    await new Promise((r) => setTimeout(r, 1200))
    expect(tree).toMatchSnapshot()
    modal = screen.queryByText(/This is a mock project used to mock me/i)
    expect(modal).toBeNull()
})

test('Alternate between ProjectList and ProjectOverview components', async () => {
    const {container} = render(<Projects />)
    let modal = screen.queryByText(/This is a mock project used to mock me/i)
    expect(modal).toBeDefined()
    userEvent.click(modal)
    await new Promise((r) => setTimeout(r, 1200))
    modal = screen.queryByText(/This is a mock project used to mock me/i)
    expect(modal).toBeNull()
    const backArrow = container.querySelector(".overview-header")
    userEvent.click(backArrow)
    await new Promise((r) => setTimeout(r, 1200))
    modal = screen.queryByText(/This is a mock project used to mock me/i)
    expect(modal).toBeDefined()
})

test('Check second set of mock info to see if the github button is enabled and website button is disabled', async () => {
    const {container} = render(<Projects />)
    let modal = screen.queryByText(/Mock Project 2/i)
    userEvent.click(modal)
    await new Promise((r) => setTimeout(r, 1200))
    expect(container).toMatchSnapshot()
    const githubButton = container.querySelector(".overview-links a:nth-child(1) button")
    const websiteButton = container.querySelector(".overview-links a:nth-child(2) button")
    expect(githubButton).toBeEnabled()
    expect(websiteButton).toBeDisabled()
})