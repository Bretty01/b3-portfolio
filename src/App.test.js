import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('App snapshots', () => {
  const tree = render(<App />)
  expect(tree).toMatchSnapshot()
  const arrowIcon = screen.getByText(/Click here to continue!/i)
  userEvent.click(arrowIcon)
  expect(tree).toMatchSnapshot()
})

test('App shows landing section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Brett Orban/i);
  expect(linkElement).toBeInTheDocument();
});

test('App does not show main section', () => {
  render(<App />)
  const unshownElement = screen.queryByText(/Projects/i)
  expect(unshownElement).toBeNull()
})

test('click ArrowDownwardIcon to show main section', () => {
  render(<App />)
  const arrowIcon = screen.getByText(/Click here to continue!/i)
  userEvent.click(arrowIcon)
  const unshownElement = screen.queryAllByText(/Projects/i)
  expect(unshownElement).not.toBeNull()
})


