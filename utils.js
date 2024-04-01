export const fetchData = async (url, headers = {}) => {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json", ...headers },
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(`HTTP error: ${response.status}`);
      console.log(data);
      return;
    }

    return data;
  } catch (e) {
    console.error("Error fetching data:", e);
  }
};

export const postData = async (url, body = {}, headers = {}) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      console.log(`HTTP error: ${response.status}`);
      console.log(data);
      return;
    }

    return data;
  } catch (e) {
    console.error("Error posting data:", e);
  }
};
