import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Datagrid from "../index";

const data = {
  pageParams: [],
  pages: [
    {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
          poster_path: "/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
          id: 123,
          title: "Die Hard",
          overview: "lorem ipsum dollor sit amet",
          release_date: "",
        },
      ],
      total_pages: 1,
      total_results: 1,
    },
  ],
};

describe("FollowersList", () => {
  it("should fetch and render input element", async () => {
    render(<Datagrid data={data} />);
    const followerDivElement = await screen.findByTestId(123);
    expect(followerDivElement).toBeInTheDocument();
  });
});
