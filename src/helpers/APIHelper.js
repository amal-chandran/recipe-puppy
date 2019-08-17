import queryString from "querystring";
const basePath = "http://www.recipepuppy.com/about/api/";

const fetchCustom = (path, method, query, body) => {
  path = `${basePath}${path}`;

  const init = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (body) init["body"] = JSON.stringify(body);

  if (query) {
    query = queryString.stringify(query);
    path = `${path}?${query}`;
  }

  return fetch(path, init).then(res => res.json());
};

export const fetchGet = (path, query) => fetchCustom(path, "GET", query);
