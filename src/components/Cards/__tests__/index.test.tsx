import * as React from 'react';
import { render } from '@testing-library/react';
import Cards from '..';

describe('Component Cards', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Cards />);
    expect(asFragment()).toMatchSnapshot();
  });
});
