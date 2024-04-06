export const fetchData = async (url, headers = {}) => {
    try {
        const response = await fetch(`https://classified-ad-platform.onrender.com${url}`, {
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
    // form data is handled differently than json
    const isFormData = body instanceof FormData;

    const options = {
        method: "POST",
        headers: isFormData
            ? { ...headers }
            : { "Content-Type": "application/json", ...headers },
        body: isFormData ? body : JSON.stringify(body),
    };

    try {
        const response = await fetch(`https://classified-ad-platform.onrender.com${url}`, options);
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

export const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
};
