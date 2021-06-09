import React from 'react';

import { render } from 'src/utils/tests';

import { Text } from 'src/components';
import Column from './Column';

describe('Column', () => {
  it('should be able to render a Text compontent within', async () => {
    const { toJSON, findByText } = render(
      <Column>
        <Text>Hello World</Text>
      </Column>
    );

    expect(await findByText('Hello World')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
