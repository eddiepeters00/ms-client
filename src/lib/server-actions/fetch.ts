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
  headers?: object;
  method: Methods;
  data: object;
}) {
  const response = await fetch(path, {
    cache,
    method: method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  if (res.error) throw new Error(res.data);
  console.error(res);
  return res.data;
}
