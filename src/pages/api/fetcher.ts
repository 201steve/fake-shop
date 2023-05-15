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
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }
    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }
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
