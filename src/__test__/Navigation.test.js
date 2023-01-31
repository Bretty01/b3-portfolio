import Navigation from "../components/Navigation/Navigation"
import B3Logo from "../components/Icons/B3Logo/B3Logo"
import {render, screen} from "@testing-library/react";
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