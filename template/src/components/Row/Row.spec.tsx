import React from 'react';

import { render } from 'src/utils/tests';

import { Text } from 'src/components';
import Row from './Row';

describe('Row', () => {
  it('should be able to render a Text compontent within', async () => {
    const { toJSON, findByText } = render(
      <Row>
        <Text>Hello World</Text>
      </Row>
    );

    expect(await findByText('Hello World')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
