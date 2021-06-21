import { Platform } from 'react-native';

const ANDROID_SUPPORTED_SINCE_SDK = 29;
const IOS_SUPPORTED_SINCE_VERSION = 13;
const WATCH_SYSTEM_APPEARANCE_WARNING =
  'watchSystemAppearence wont work because Dark Mode is only supported on :platform_label greather than or equal :version';

export const isSystemDarkModeSupported = Platform.select({
  android: (Platform.Version as number) >= ANDROID_SUPPORTED_SINCE_SDK,
  ios: (Platform.Version as number) >= IOS_SUPPORTED_SINCE_VERSION
});

export const unsupportedWatchSystemAppearanceWarning = Platform.select({
  android: WATCH_SYSTEM_APPEARANCE_WARNING.replace(':platform_label', 'Android SDK').replace(
    ':version',
    ANDROID_SUPPORTED_SINCE_SDK.toString()
  ),
  ios: WATCH_SYSTEM_APPEARANCE_WARNING.replace(':platform_label', 'IOS').replace(
    ':version',
    IOS_SUPPORTED_SINCE_VERSION.toString()
  )
});
