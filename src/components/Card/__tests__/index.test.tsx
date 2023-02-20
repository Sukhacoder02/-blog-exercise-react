import * as React from 'react';
import Card from '../../Card';
import { fireEvent, render } from '@testing-library/react';

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
    date={mockProps.date}
    readingTime={mockProps.readingTime}
    title={mockProps.title}
    description={mockProps.description}
    claps={mockProps.claps}
    image={mockProps.image}
    liked={mockProps.liked}
  />
);

describe('Component Card', () => {
  it('Shoud render without crashing', () => {
    const { asFragment } = render(card);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('Button claps', () => {
    it('Should  increase the number of claps by 1 when pressed', () => {
      const { getByTestId } = render(card);
      const numClaps = getByTestId('claps');
      expect(numClaps.textContent).toBe(mockProps.claps.toString());
      const clapsButton = getByTestId('testClapButton');
      fireEvent.click(clapsButton);
      expect(numClaps.textContent).toBe((mockProps.claps + 1).toString());
    });
    it('Should be disabled after being pressed', () => {
      const { getByTestId } = render(card);
      const clapsButton = getByTestId('testClapButton') as HTMLButtonElement;
      fireEvent.click(clapsButton);
      expect(clapsButton.disabled).toBe(true);
    });
  });
  describe('Button like', () => {
    it('Should fill the button with red color when clicked', () => {
      const { getByTestId } = render(card);
      const heartButton = getByTestId('testHeartButton');
      expect(heartButton.querySelector('img')?.src.includes('black')).toBe(true);
      fireEvent.click(heartButton);
      expect(heartButton.querySelector('img')?.src.includes('red')).toBe(true);
    });
    it('Should fill the button with black color when clicked twice', () => {
      const { getByTestId } = render(card);
      const heartButton = getByTestId('testHeartButton');
      expect(heartButton.querySelector('img')?.attributes.src.value.includes('red')).toBe(false);
      fireEvent.click(heartButton);
      expect(heartButton.querySelector('img')?.attributes.src.value.includes('red')).toBe(true);
      fireEvent.click(heartButton);
      expect(heartButton.querySelector('img')?.attributes.src.value.includes('black')).toBe(true);
    });
  });
});
