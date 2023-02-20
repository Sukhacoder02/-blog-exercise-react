import * as React from 'react';
import { render } from '@testing-library/react';
import MainDiv from '..';

describe('Component MainDiv', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(<MainDiv />);
    expect(asFragment()).toMatchSnapshot();
  });
});
