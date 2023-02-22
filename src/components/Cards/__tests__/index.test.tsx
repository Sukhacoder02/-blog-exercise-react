import * as React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Cards from '..';
import posts from '../../../mockData/index.json';
import makeRequest from '../../../utils/MakeRequest';

jest.mock('../../../utils/MakeRequest/');
jest.mock('react-router-dom');

describe('Component Cards', () => {
  const mockedMakeRequest = makeRequest as jest.MockedFunction<typeof makeRequest>;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should show loading text when data is still loading', async () => {
    mockedMakeRequest.mockResolvedValueOnce(posts);
    render(<Cards />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    await waitFor(() => {
      const title = screen.getByText('The future of abstract art and the culture ...');
      expect(title).toBeTruthy();
    });
  });
  it('renders without crashing', async () => {
    mockedMakeRequest.mockResolvedValueOnce(posts);
    const { asFragment } = render(<Cards />);
    await waitFor(() => {});
    expect(asFragment()).toMatchSnapshot();
  });
  it(`Should contain ${posts.length} cards`, async () => {
    mockedMakeRequest.mockResolvedValueOnce(posts);
    const { getAllByTestId } = render(<Cards />);
    await waitFor(() => {
      const cards = getAllByTestId('card');
      expect(cards.length).toEqual(posts.length);
    });
  });
});
