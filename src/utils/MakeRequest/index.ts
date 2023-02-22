import axios from 'axios';

type ApiEndPoint = {
  url: string;
  method: string;
};
const makeRequest = async (apiEndPoint: ApiEndPoint, config = {}) => {
  const requestDetails = {
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...config,
  };
  try {
    const { data } = await axios(requestDetails);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default makeRequest;
