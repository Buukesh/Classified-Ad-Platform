export const fetchData = async (url, headers = {}) => {
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json", ...headers },
    });
    if (!response.ok) {
      console.log(`HTTP error: ${response.status}`);
      return;
    }

    return await response.json();
  } catch (e) {
    console.error("Error fetching data:", e);
  }
};

export const postData = async (url, headers = {}, body = {}) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(`HTTP error: ${response.status}`);
      return;
    }

    return await response.json();
  } catch (e) {
    console.error("Error posting data:", e);
  }
};
