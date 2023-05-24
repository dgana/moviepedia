import { render } from "@testing-library/react";
import FlexBox from "../index";

describe("FlexBox props tests", () => {
  it("should have class justify-start and items-start as default", () => {
    const { container } = render(<FlexBox />);
    expect(container.firstChild).toHaveClass("justify-start items-start");
  });

  it("should have class justify-between and items-center", () => {
    const { container } = render(<FlexBox justify="between" align="center" />);
    expect(container.firstChild).toHaveClass("justify-between items-center");
  });
});
