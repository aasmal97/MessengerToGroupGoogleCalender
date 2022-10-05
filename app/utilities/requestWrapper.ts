import axios from "axios";
import { AxiosRequestConfig } from "axios";
const requestWrapper = async (body: AxiosRequestConfig<any>) => {
  try {
    const result = await axios(body);
    return result.data;
  } catch (e) {
    console.error(e);
    console.trace(e);
  }
};
export default requestWrapper;
