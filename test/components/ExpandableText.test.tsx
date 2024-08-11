import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longtext = "Hello World".repeat(256);
  const shorten = longtext.substring(0, 255) + "...";

  it("should render the full text if < 255 length", () => {
    const text = "Hello World";
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("should shorten the text if > 255 length", () => {
    const text = "Hello World".repeat(256);
    render(<ExpandableText text={longtext} />);
    expect(screen.getByText(shorten)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });
  it("should expand text when show more button is clicked", async () => {
    render(<ExpandableText text={longtext} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(screen.getByText(longtext)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when shwo less button is clicked", async () => {

    render(<ExpandableText text={longtext} />);
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(showLessButton);

    expect(screen.getByText(shorten)).toBeInTheDocument();
    expect(showLessButton).toHaveTextContent(/more/i);
  });
});
