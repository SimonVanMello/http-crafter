import React from 'react';
import { View, ViewProps } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import { boxStyle } from './styles';

export type BoxProps = ViewProps &
  VariantProps<typeof boxStyle> & { className?: string };

const Box = React.forwardRef<React.ElementRef<typeof View>, BoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <View ref={ref} {...props} className={boxStyle({ class: className })} />
    );
  },
);

Box.displayName = 'Box';
export { Box };
