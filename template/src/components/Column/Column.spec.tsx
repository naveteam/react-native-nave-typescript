import React from 'react';

import { render } from 'src/utils/tests';

import { Text } from 'src/components';
import Column from './Column';

describe('Column', () => {
  it('should be able to render a Text compontent within', () => {
    const { toJSON, getByText } = render(
      <Column>
        <Text>Hello World</Text>
      </Column>
    );

    expect(getByText('Hello World')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
