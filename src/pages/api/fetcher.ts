type AnyObj = { [key: string]: any };

const BASE_URL = "https://fakestoreapi.com";

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyObj;
  params?: AnyObj;
}) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    const response = await fetch(url, fetchOptions);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
