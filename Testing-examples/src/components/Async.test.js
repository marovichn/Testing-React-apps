import "@testing-library/jest-dom";
import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async tests", () => {
  test("renders posts, successful request", async () => {
    //Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "post" }],
    });
    render(<Async></Async>);

    //Act
    // null

    //Asert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
