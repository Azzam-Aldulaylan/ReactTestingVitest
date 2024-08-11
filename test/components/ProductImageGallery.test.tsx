import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";
import { expect } from "vitest";

describe("ProductImageGallery", () => {
  it("should check for empty images", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
  it("should render a list of images", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageUrls.forEach((image, index) => {
      expect(images[index]).toHaveAttribute("src", image);
    });
  });
});
