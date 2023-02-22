import * as React from 'react';
import Card from '../../Card';
import { fireEvent, render, waitFor } from '@testing-library/react';

const mockProps = {
  date: '2nd January, 2018',
  readingTime: '2 mins',
  title: 'The future of abstract art and the culture ...',
  description:
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
  claps: 10,
  liked: false,
  image: 'abstract.png',
};
const card = (
  <Card
    key={0}
    id={0}
    date={mockProps.date}
    readingTime={mockProps.readingTime}
    title={mockProps.title}
    description={mockProps.description}
    claps={mockProps.claps}
    image={mockProps.image}
    liked={mockProps.liked}
  />
);
jest.mock('../../../utils/MakeRequest', () => () => {
  return Promise.resolve(true);
});

describe('Component Card', () => {
  it('Should render without crashing', async () => {
    const { asFragment } = render(card);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('Button claps', () => {
    it('Should  increase the number of claps by 1 when pressed', async () => {
      const { getByTestId } = render(card);
      const numClaps = getByTestId('claps');
      expect(numClaps.textContent).toBe(mockProps.claps.toString());
      const clapsButton = getByTestId('testClapButton');
      fireEvent.click(clapsButton);
      await waitFor(() => {
        expect(numClaps.textContent).toBe((mockProps.claps + 1).toString());
      });
    });
    it('Should be disabled after being pressed', async () => {
      const { getByTestId } = render(card);
      const clapsButton = getByTestId('testClapButton') as HTMLButtonElement;
      fireEvent.click(clapsButton);
      await waitFor(() => {
        expect(clapsButton.disabled).toBe(true);
      });
    });
  });
  describe('Button like', () => {
    it('Should fill the button with red color when clicked', async () => {
      const { getByTestId } = render(card);
      const heartButton = getByTestId('testHeartButton');
      expect(heartButton.querySelector('img')?.src.includes('black')).toBe(true);
      fireEvent.click(heartButton);
      await waitFor(() => {
        expect(heartButton.querySelector('img')?.src.includes('red')).toBe(true);
      });
    });
    it('Should fill the button with black color when clicked twice', async () => {
      const { getByTestId } = render(card);
      const heartButton = getByTestId('testHeartButton');
      expect(heartButton.querySelector('img')?.attributes.src.value.includes('red')).toBe(false);
      fireEvent.click(heartButton);
      await waitFor(() => {
        expect(heartButton.querySelector('img')?.attributes.src.value.includes('red')).toBe(true);
      });
      fireEvent.click(heartButton);
      await waitFor(() => {
        expect(heartButton.querySelector('img')?.attributes.src.value.includes('black')).toBe(true);
      });
    });
  });
});
