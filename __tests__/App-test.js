
// React Imports
import React from 'react';

//Custom Imports
import App from '../src/App';

// Test Library Imports
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

