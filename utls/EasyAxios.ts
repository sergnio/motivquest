import axios, { AxiosResponse, Method as AxiosMethodType } from "axios";

const axiosWrapper = async <T>(
  method: AxiosMethodType,
  url: string,
  payload?: Object,
  token?: string
): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios({
    url,
    method,
    data: payload,
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchData = <T>(url: string, payload?: Object): Promise<T> =>
  axiosWrapper("get", url, payload);
export const postData = <T>(
  url: string,
  payload: Object,
  token?: string
): Promise<T> => axiosWrapper("post", url, payload, token);
export const putData = <T>(url: string, payload: Object): Promise<T> =>
  axiosWrapper("put", url, payload);
export const deleteData = <T>(url: string, payload: Object = {}): Promise<T> =>
  axiosWrapper("delete", url, payload);
