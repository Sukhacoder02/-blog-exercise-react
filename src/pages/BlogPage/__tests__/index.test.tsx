import * as React from 'react';
import { render } from '@testing-library/react';
import BlogPage from '..';
jest.mock('react-router-dom');
describe('Page BlogPage', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(<BlogPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
