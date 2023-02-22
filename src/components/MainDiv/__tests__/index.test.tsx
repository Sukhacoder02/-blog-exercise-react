import * as React from 'react';
import { render } from '@testing-library/react';
import MainDiv from '..';

jest.mock('react-router-dom');
describe('Component MainDiv', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(<MainDiv />);
    expect(asFragment()).toMatchSnapshot();
  });
});
