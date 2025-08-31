const base_url = 'http://127.0.0.1:8000'


const getData = async (url: string) => {
    console.log(`${base_url}${url}`)
    const res = await fetch(`${base_url}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const message = errorData.message || `Error ${res.status}: ${res.statusText}`;
        throw new Error(message);
    }

    return res.json();
};

export { getData };
