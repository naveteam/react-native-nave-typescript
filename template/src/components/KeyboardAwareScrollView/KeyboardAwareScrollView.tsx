import React, { FC, ReactNode } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view';

interface KeyboardAwareScrollViewComponentProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

/**
 * @deprecated Since React Native 65+ has pushed [changes](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md)
 * to the `NativeEventEmmiter` API, this package is currenctly causing crashes as mentioned [here](https://github.com/react-native-community/releases/issues/242#issuecomment-900132372).
 */
const KeyboardAwareScrollViewComponent: FC<KeyboardAwareScrollViewComponentProps> = ({
  children,
  ...rest
}) => (
  <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    {...rest}
  >
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardAwareScrollViewComponent;
