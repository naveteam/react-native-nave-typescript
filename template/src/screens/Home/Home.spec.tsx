import { render, withScreen } from 'src/utils/tests';

import Home from './Home';

describe('Home', () => {
  it('should be able to render', () => {
    const { getByText } = render(withScreen({ name: 'Home', component: Home }));

    expect(getByText('Built with react-native-nave-typescript')).toBeTruthy();
    expect(getByText('Form example')).toBeTruthy();
  });
});
