import { FetchProps, FetchResType } from "@types";
import ip from "./ip";

type FetchManagerType = (props: FetchProps) => FetchResType<any>;

/**
 * @timeout default 8000 ms
 * @returns 실패시 `success: false, data: null, message: string` 응답을 받는다.
 */
const fetchManager: FetchManagerType = async ({
  url,
  method,
  body,
  auth,
  timeout,
}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout || 8000);
  try {
    const res = await fetch(`${ip}${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        ...(auth && {
          // JWT auth 전략을 사용한다고 가정
          Authorization: auth.token,
        }),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    const data = await res.json();

    // 실패 응답을 json 형태 { message: string }로 반환해준다고 가정
    if (!res.ok) {
      console.log(`[${res.status}] ${data.message}`);
      return { success: false, data: null, message: `${data.message}` };
    }

    return { success: true, data };
  } catch (e) {
    alert(e.toString());
    console.log("[fetch error]", e);
    return { success: false, data: null, message: "통신 에러" };
  } finally {
    clearTimeout(timeoutId);
  }
};

export default fetchManager;
