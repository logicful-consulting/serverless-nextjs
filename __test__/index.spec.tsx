import { render } from "@testing-library/react";
import HomePage from "../pages";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn()
    };
  },
}));

describe("Home", () => {
  it("contains a button", () => {
    const { queryByText } = render(<HomePage />);
    expect(queryByText("Navigate me")).toBeInTheDocument();
  })
});