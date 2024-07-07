/**
 * Problem: send a GET request to the giphy API to fetch some trending images
 *
 * endpoint: https://api.giphy.com/v1/gifs/trending
 */

import fetch from "isomorphic-unfetch";
import * as dotenv from "dotenv";
dotenv.config();

const giphyApiKey = process.env.GIPHY_API_KEY;

async function postRequest() {
  const url = new URL("https://api.giphy.com/v1/gifs/trending");
  url.searchParams.append("api_key", giphyApiKey!);
  url.searchParams.append("limit", "5");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": `application/json`,
    },
  });

  if (response.status !== 200) {
    throw new Error(`error in request: ${response.status}`);
  }

  const data = await response.json();

  console.log(data);
}

postRequest().catch((e) => {
  console.log(e);
});
