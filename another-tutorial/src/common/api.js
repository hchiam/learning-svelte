export const bookApiUrl = "http://localhost:3000/books";

export function httpGet(path) {
  return request(path, "GET");
}

export function httpPost(path, data) {
  return request(path, "POST", data);
}

export function httpPut(path, data) {
  return request(path, "PUT", data);
}

async function request(path, method = "GET", data) {
  const url = bookApiUrl + path;

  // fetch result:
  const result = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data && JSON.stringify(data),
  });

  const json = await result.json();

  return { ok: result.ok, data: json };
}
