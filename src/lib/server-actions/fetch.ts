"use server";

type Methods = "put" | "post" | "get" | "delete" | "patch";

export default async function fetchData({
  path,
  headers,
  method,
  data,
  cache,
}: {
  cache?: RequestCache;
  path: string;
  headers?: HeadersInit;
  method: Methods;
  data?: object;
}) {
  const options: RequestInit = {
    cache,
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };

  if (method !== "get" && data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(path, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();

    if (res.error) {
      throw new Error(res.data);
    }

    return res.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
