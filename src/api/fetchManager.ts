import ip from "./ip";

type FetchManagerParams = [
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  options?: {
    body?: any;
    timeout?: number;
    auth?: { access: string; refresh: string };
  }
];
type FetchManagerType = (...params: FetchManagerParams) => Promise<any>;

const fetchManager: FetchManagerType = async (url, method, options) => {
  const controller = new AbortController();
  const timeout = options?.timeout || 8000;
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(`${ip}${url}`, {
      method,
      body: JSON.stringify(options?.body),
      headers: {
        ...(options?.auth && {
          Authorization: `Bearer ${options.auth.access}`,
        }),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(await res.text());

    return await res.json();
  } catch (e) {
    console.log("[fetch error]", e);
  } finally {
    clearTimeout(timeoutId);
  }
};

export default fetchManager;
