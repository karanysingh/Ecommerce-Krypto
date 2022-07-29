async function get(url) {
  const requestOptions = {
    method: "GET",
  };
  let response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function getSecure(url, token) {
  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };
  let response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  let response = await fetch(url, requestOptions);

  return handleResponse(response);
}
async function postSecure(url, body, token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
  let response = await fetch(url, requestOptions);

  return handleResponse(response);
}
async function postFile(url, body) {
  //console..log(body);
  const requestOptions = {
    method: "POST",
    // headers: { 'Content-Type': 'multipart/form-data' },
    body: body,
  };
  let response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}
async function deleteSecure(url, token) {
  // console.log(url,token)

  const requestOptions = {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}
async function patch(url, body) {
  const requestOptions = {
    method: "PATCH",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  let response = await fetch(url, requestOptions);

  return handleResponse(response);
}

async function patchSecure(url, body, token) {
  const requestOptions = {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
  let response = await fetch(url, requestOptions);

  return handleResponse(response);
}

// helper functions

function handleResponse(response) {
  return response.text().then((text) => {
    if (response.status === 201 || response.status === 200) {
      const data = text && JSON.parse(text);
      // //console..log(data);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    }
    if (response.status === 400) {
      return Promise.reject("Invalid Parameters");
    }
    if (response.status === 401) {
      return Promise.reject("Unauthorized");
    }
    if (response.status === 403) {
      return Promise.reject("Forbidden");
    }
    if (response.status === 404) {
      return Promise.reject("Not Found");
    }
    if (response.status === 500) {
      return Promise.reject("Something went wrong");
    }
    if (response.status === 502) {
      return Promise.reject("Bad Gateway");
    }
  });
}

export const fetchWrapper = {
  get,
  post,
  patch,
  patchSecure,
  postFile,
  postSecure,
  put,
  delete: _delete,
  deleteSecure,
  getSecure,
};
// REF - >https://jasonwatmore.com/post/2021/04/20/next-js-10-crud-example-with-react-hook-form
