import { render, screen } from "@testing-library/react";
import Text from "../index";

describe("Text props tests", () => {
  it("should have class font montserat and text sm as default", () => {
    const { container } = render(<Text>lorem ipsum</Text>);
    expect(container.firstChild).toHaveClass("font-montserat text-sm");
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
  });

  it("should have class font fugaz and text", () => {
    const { container } = render(
      <Text font="fugaz" size="xl">
        lorem ipsum
      </Text>
    );
    expect(container.firstChild).toHaveClass("font-fugaz text-2xl");
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
  });
});
