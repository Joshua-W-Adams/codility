/**
 * Problem: write a basic get request to openAPIs api to fetch the list of models
 * available
 *
 * endpoint: https://api.openapi.com/v1/models
 */

import fetch from "isomorphic-unfetch";
import * as dotenv from "dotenv";
dotenv.config();

const openApiKey = process.env.OPENAPI_API_KEY;

async function run() {
  const basepath = "https://api.openai.com/v1/models";

  try {
    const response = await fetch(basepath, {
      method: "GET",
      headers: {
        authorization: `Bearer ${openApiKey}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Non successful response: ${response.status}`);
    }

    // fetch api returns a stream of raw binary data that allows you to read the
    // response incrementally
    // response.body -> ReadableStream<Uint8Array>

    // reads from the stream and parses (deserializes) to json
    const data = await response.json();

    console.log(data);
  } catch (e) {
    throw e;
  }
}

run().catch((err) => {
  console.log(err);
});
