import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

type ApiEndPoint = {
  url: string;
  method: string;
};
const makeRequest = async (apiEndPoint: ApiEndPoint, config = {}, navigate?: NavigateFunction) => {
  const requestDetails = {
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...config,
  };
  try {
    const { data } = await axios(requestDetails);
    return data;
  } catch (error: any) {
    if (navigate) {
      if (error.response?.data?.statusCode) {
        navigate(`/error/${error.response.data.statusCode}`);
      } else {
        navigate('/error/');
      }
    }
  }
};
export default makeRequest;
