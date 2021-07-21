declare module "@types" {
  /* props */
  interface FetchProps {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    timeout?: number;
    auth?: Auth;
  }
  interface useFetchProps<T> extends FetchProps {
    initialData: T;
  }

  /* response */
  type FetchResType<T> = Promise<{
    success: boolean
    data: T;
    message?: string
  }>;
}