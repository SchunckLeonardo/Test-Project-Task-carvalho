import axios from "axios";
import { JSDOM } from "jsdom";

// Fetches the Amazon search page and returns the products
export async function fetchContentAmazonSearch(search) {
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(search)}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        DNT: "1",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const productElements = document.querySelectorAll(".s-result-item");

    const products = [];

    productElements.forEach((product) => {
      const titleElement = product.querySelector("h2 a span");
      const ratingElement = product.querySelector(".a-icon-alt");
      const reviewsElement = product.querySelector(".a-size-base");
      const imageElement = product.querySelector(".s-image");

      if (titleElement && ratingElement && reviewsElement && imageElement) {
        const title = titleElement.textContent.trim();
        const rating = ratingElement.textContent.trim();
        const reviews = reviewsElement.textContent.trim();
        const imageUrl = imageElement.src;

        products.push({
          title,
          rating,
          reviews,
          imageUrl,
        });
      }
    });

    return {
      search,
      products,
    };
  } catch (error) {
    console.error("Error fetching the Amazon page:", error);
    return { search, products: [] };
  }
}
