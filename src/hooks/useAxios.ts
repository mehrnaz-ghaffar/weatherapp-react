import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
  baseURL: "http://api.weatherapi.com/v1/", // Change this to your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxios = <T>(url: string, method: string, payload?: any) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        url,
        method: method.toUpperCase() as AxiosRequestConfig["method"], // Ensure method is valid
        data: payload,
      };

      const response: AxiosResponse<T> = await axios.request(config);

      setData(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchData(); // Fetch when the hook is first used
  // }, [url, method, JSON.stringify(payload)]); // Run effect when these change

  return { data, error, loading, refetch: fetchData };
};

export default useAxios;
