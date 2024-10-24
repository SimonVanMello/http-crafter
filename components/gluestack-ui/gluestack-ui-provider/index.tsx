import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import useColorMode from '@app/hooks/useColorMode.hook';

import { config } from './config';

const GluestackUIProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <View
      style={[config[colorMode], { flex: 1, height: '100%', width: '100%' }]}
    >
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
};

export default GluestackUIProvider;
