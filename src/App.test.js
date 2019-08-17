import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {
  render,
  fireEvent
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should accept a click on the button', () => {
    const { getByText, container, getByTestId } = render(<App/>);
    expect(container).toMatchSnapshot();
    fireEvent.click(getByText('Doubler'));
    expect(getByTestId('numberDisplay')).toHaveTextContent('2');
    fireEvent.click(getByText('Doubler'));
    expect(getByTestId('numberDisplay')).toHaveTextContent('4');
  })
})
