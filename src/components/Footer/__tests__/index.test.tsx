import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Component Footer', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
