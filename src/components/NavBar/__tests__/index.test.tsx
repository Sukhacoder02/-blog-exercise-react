import * as React from 'react';
import { render } from '@testing-library/react';
import NavBar from '..';

describe('component NavBar', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
