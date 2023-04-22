import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("testing greeting component as a text", () => {
  render(<Greeting />);
  const linkElement = screen.getByText(/good/i);
  expect(linkElement).ToBeInTheDocument;
});
