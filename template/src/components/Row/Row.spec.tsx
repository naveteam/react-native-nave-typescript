import React from 'react';

import { render } from 'src/utils/tests';

import { Text } from 'src/components';
import Row from './Row';

describe('Row', () => {
  it('should be able to render a Text compontent within', () => {
    const { getByText } = render(
      <Row>
        <Text>Hello World</Text>
      </Row>
    );

    expect(getByText('Hello World')).toBeTruthy();
  });
});
