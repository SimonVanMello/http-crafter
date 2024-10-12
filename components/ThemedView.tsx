import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@app/hooks/useThemeColor';

interface Props extends ViewProps {
  lightColor?: string;
  darkColor?: string;
}

const ThemedView = (props: Props) => {
  const { lightColor, darkColor, style, ...rest } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <View style={[{ backgroundColor }, style]} {...rest} />;
};

export default ThemedView;
