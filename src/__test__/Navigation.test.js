import Navigation from "../components/Navigation/Navigation"
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
    //TODO: Snapshot is not resizing to 425 but innerWidth is set accordingly.
    const tree = render(<Navigation />)
    console.log(window.innerWidth)
    global.innerWidth = 425
    fireEvent(window, new Event('resize'))
    expect(window.innerWidth).toEqual(425)
    console.log(window.innerWidth)
    expect(tree).toMatchSnapshot()
})
