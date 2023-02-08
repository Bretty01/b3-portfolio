import handleEmail from "../components/Contact/handleEmail"
import Contact from "../components/Contact/Contact"
import {render, screen, waitFor} from "@testing-library/react"
import userEvent from '@testing-library/user-event'

jest.mock('../components/Contact/handleEmail')

test('Default Contact snapshot', () => {
    const tree = render(<Contact />)
    expect(tree).toMatchSnapshot()
})

test('Contact page shows correct success message on submit', async () => {
    render(<Contact />)
    handleEmail.mockImplementation(() => {return {status: 200, text: "This is a success message"}})
    const submitButton = screen.getByText('Submit')
    userEvent.click(submitButton)
    expect(handleEmail).toBeCalled()
    await waitFor(() => screen.getByText(/Your message has been successfully sent./i))
    expect(screen.getByText(/Your message has been successfully sent./i)).toBeDefined()
})

test('Contact page shows correct error message on submit', async () => {
    render(<Contact />)
    handleEmail.mockImplementation(() => {return {status: 400, text: "This is an error message"}})
    const submitButton = screen.getByText('Submit')
    userEvent.click(submitButton)
    expect(handleEmail).toBeCalled()
    await waitFor(() => screen.getByText(/This is an error message/i))
    expect(screen.getByText(/This is an error message/i)).toBeDefined()
})
