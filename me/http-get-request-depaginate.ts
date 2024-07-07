/**
 * Problem: write a GET request that depaginates all results returned from the giphy
 * API search endpoint
 *
 * endpoint: https://api.giphy.com/v1/gifs/search
 *
 */

import fetch from "isomorphic-unfetch";
import dotenv from "dotenv";
dotenv.config();

const giphyKey = process.env.GIPHY_API_KEY;

async function depaginate() {
  const basepath = `https://api.giphy.com/v1/gifs/search`;

  let nextPage = true;
  let page = 0;
  const results: object[] = [];

  while (nextPage) {
    const url = new URL(basepath);
    url.searchParams.append("api_key", giphyKey!);
    url.searchParams.append("q", "cheese");
    url.searchParams.append("limit", "50");
    url.searchParams.append("offset", page.toString());

    const response = await fetch(url, {
      method: "GET",
    });

    if (response.status !== 200) {
      throw new Error(`failure during depagination request ${response.status}`);
    }

    const data = await response.json();

    results.concat(data);

    if ((data.pagination.offset + 1) * 50 <= data.pagination.total_count) {
      nextPage = true;
      page++;
    } else {
      nextPage = false;
    }
    console.log(`page`, data.pagination.offset + 1);
  }
}

depaginate().catch((e) => {
  console.log(e);
});
