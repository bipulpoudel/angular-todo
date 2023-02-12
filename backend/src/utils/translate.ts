import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const translateText = async ({ text, to }) => {
  try {
    let key = process.env.TRANSLATOR_TEXT_SUBSCRIPTION_KEY;
    let endpoint = process.env.TRANSLATOR_TEXT_ENDPOINT;

    let location = process.env.TRANSLATOR_TEXT_LOCATION;

    let response = await axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
        "X-ClientTraceId": uuidv4().toString(),
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: to,
      },
      data: [
        {
          text: text,
        },
      ],
      responseType: "json",
    });

    return response?.data[0]?.translations[0]?.text || text;
  } catch (error) {
    console.log(error?.response?.data?.error);
  }
};
