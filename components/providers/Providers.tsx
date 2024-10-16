import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { I18nextProvider } from 'react-i18next';

import 'reflect-metadata';

import { GluestackUIProvider } from '@app/components/gluestack-ui/gluestack-ui-provider';
import useColorMode from '@app/hooks/useColorMode.hook';
import i18n from '@app/translations/i18n';

import '@app/database';

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  const { colorMode } = useColorMode();

  return (
    <GestureHandlerRootView>
      <I18nextProvider i18n={i18n}>
        <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default Providers;
