import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '..';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom');
describe('Page Error', () => {
  const mockedUseParams = useParams as jest.MockedFunction<typeof useParams>;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should render without crashing', () => {
    mockedUseParams.mockReturnValueOnce({ statusCode: '404' });
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });
  it('Should display the status code when it is passed in the parans', () => {
    mockedUseParams.mockReturnValueOnce({ statusCode: '404' });
    render(<Error />);
    expect(screen.getByText('HTTP Status Code: 404')).toBeTruthy();
  });
});
