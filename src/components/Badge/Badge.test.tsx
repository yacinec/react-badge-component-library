import React from 'react';
import { render } from '@testing-library/react';

import Badge from './Badge';

describe('Badge', () => {
  test('renders the Badge component', () => {
    render(<Badge text='Notifications' number={3} color='#6ab04c' />);
  });
});
