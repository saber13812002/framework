import axios, { AxiosRequestConfig } from 'axios';

const baseURL: any = (document.querySelector('meta[name="base-url"]') as Element).getAttribute('content');
const fetchClient = () => {
  const defaultOptions: AxiosRequestConfig = {
    baseURL: `${baseURL}/api`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });

  return instance;
};

export default fetchClient();
