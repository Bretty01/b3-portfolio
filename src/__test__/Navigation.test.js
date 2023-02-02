import Navigation from "../components/Navigation/Navigation"
import App from "../App"
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

test('Navigation matches snapshot', () => {
    const tree = render(<Navigation />)
    expect(tree).toMatchSnapshot()
})

test('B3Logo hover snapshot', () => {
    const {container} = render(<Navigation />)
    const b3logo = container.querySelector("#b3-logo")
    userEvent.hover(b3logo)
    expect(b3logo).toMatchSnapshot()
})

test('Resize window width and snapshot the navigation', () => {
    const {container} = render(<App />)
    const arrowIcon = screen.getByText(/Click here to learn more!/i)
    userEvent.click(arrowIcon)
    global.window.innerWidth = 425
    expect(window.innerWidth).toEqual(425)
    fireEvent(window, new Event('resize'))
    const nav = container.querySelector(".nav")
    expect(nav).toMatchSnapshot()
})
