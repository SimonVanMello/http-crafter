// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type ComponentProps } from 'react';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabBarIcon = (
  props: IconProps<ComponentProps<typeof Ionicons>['name']>,
) => {
  const { style, ...rest } = props;

  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
};

export default TabBarIcon;
