import "@testing-library/jest-dom";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("greeting component", () => {
  test("testing greeting component as a text", () => {
    render(<Greeting />);
    const goodTextElement = screen.getByText(/good/i);
    expect(goodTextElement).ToBeInTheDocument;
  });

  test("starting text button not changed", () => {
    render(<Greeting></Greeting>);
    const greeting = screen.getByText(/It's good to see you!/i);
    expect(greeting).ToBeInTheDocument;
  });

  test("changed text button changed", () => {
    //Arrange
    render(<Greeting></Greeting>);

    //Act
    const buttonElememt = screen.getByRole("button");
    userEvent.click(buttonElememt);

    //Assert

    expect(screen.getByText(/Changed/i)).ToBeInTheDocument;
  });

  test("changed text button changed", () => {
    //Arrange
    render(<Greeting></Greeting>);

    //Act
    const buttonElememt = screen.getByRole("button");
    userEvent.click(buttonElememt);

    //Assert

    expect(screen.queryByText(/It's good to see you!/i)).toBeNull;
  });
});
