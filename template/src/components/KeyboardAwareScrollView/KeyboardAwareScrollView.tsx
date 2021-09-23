import React, { FC, ReactNode } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view';

interface KeyboardAwareScrollViewComponentProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

/**
 * @deprecated https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/494#issuecomment-900089166
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
