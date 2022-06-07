import { AxiosPromise } from "axios";

export const adaptAxios = <T>(promise: AxiosPromise<T>) =>
  promise.then(({ data }) => data);
