import React from 'react';

import { render } from 'src/utils/tests';

import Text from './Text';

describe('Text', () => {
  it('should be able to render a text within', () => {
    const { getByText } = render(<Text>Hello World</Text>);

    expect(getByText('Hello World')).toBeTruthy();
  });
});
