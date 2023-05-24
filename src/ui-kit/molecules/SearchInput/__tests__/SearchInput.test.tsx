import { expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../index";

const mockedSetTodo = vi.fn();

describe("SearchInput props tests", () => {
  it("should be able to change event", async () => {
    render(<SearchInput search="test" onChange={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Search movies here.../i) as HTMLInputElement;
    expect(inputElement.value).toBe("test");
  });

  it("should be able to change event", async () => {
    render(<SearchInput onChange={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Search movies here.../i) as HTMLInputElement;

    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "God" } });

    expect(mockedSetTodo).toHaveBeenCalled();
    expect(inputElement.value).toBe("God");
  });
});
