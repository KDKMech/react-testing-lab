import { render, screen } from "@testing-library/react";
import App from "./App";
import { Home, } from "./components/Home";
import { List } from "./components/List";
import { TodoCard } from "./components/TodoCard";




test("renders the h1 header for the home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});



test("render a list of todo items.", () => {
  render(<List />);
  const linkElement = screen.getByText(/list of things to do/i);
  expect(linkElement).toBeInTheDocument();
});

test("render a todo Item", () => {
  render(<TodoCard/>);
  const linkElement = screen.getByText(/item/i)
  expect(linkElement).toBeInTheDocument()
})
