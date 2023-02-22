import makeRequest from '..';
import axios from 'axios';

jest.mock('axios');
const mockApiEndPointGet = {
  url: 'https://api.github.com',
  method: 'get',
};
const mockConfig = {
  body: {
    claps: 1,
  },
};

const mockApiEndPointPut = {
  url: 'https://api.github.com',
  method: 'put',
};
describe('Util MakeRequest', () => {
  const mockedAxios = axios as jest.MockedFunction<typeof axios>;
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('Should make API call with appropriate options and return correct response body when only api endpoint is passed', async () => {
    mockedAxios.mockResolvedValueOnce({ data: { message: 'Hello Axios' } });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(mockApiEndPointGet);
    expect(mockedAxios).toBeCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith(mockApiEndPointGet);
    expect(response.message).toEqual('Hello Axios');
  });
  it('Should make API call with appropriate options and return correct response body when config is also passed', async () => {
    const axiosRequest = {
      url: 'https://api.github.com',
      method: 'put',
      ...mockConfig,
    };
    mockedAxios.mockResolvedValueOnce({ data: { message: 'Hello Axios' } });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(mockApiEndPointPut, mockConfig);
    expect(mockedAxios).toBeCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith(axiosRequest);
    expect(response.message).toEqual('Hello Axios');
  });
  it('Should navigate to error page when API call fails from the server end', async () => {
    const rejectedResponse = {
      response: {
        data: {
          statusCode: 404,
        },
      },
    };
    mockedAxios.mockRejectedValueOnce(rejectedResponse);
    const mockNavigate = jest.fn();
    await makeRequest(mockApiEndPointGet, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`/error/${rejectedResponse.response.data.statusCode}`);
  });
  it('Should navigate to error page when API call fails', async () => {
    const mockNavigate = jest.fn();
    mockedAxios.mockRejectedValueOnce({ response: {} });
    await makeRequest(mockApiEndPointGet, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error/');
  });
});
