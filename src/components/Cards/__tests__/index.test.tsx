import * as React from 'react';
import { render } from '@testing-library/react';
import Cards from '..';
import posts from '../../../mockData/index.json';

describe('Component Cards', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Cards />);
    expect(asFragment()).toMatchSnapshot();
  });
  it(`Should contain ${posts.length} cards`, () => {
    const { getAllByTestId } = render(<Cards />);
    const cards = getAllByTestId('card');
    expect(cards.length).toEqual(posts.length);
  });
});
