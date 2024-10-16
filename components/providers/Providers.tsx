import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';

import 'reflect-metadata';

import { GluestackUIProvider } from '@app/components/gluestack-ui/gluestack-ui-provider';
import useColorMode from '@app/hooks/useColorMode.hook';
import i18n from '@app/translations/i18n';

import '@app/database';

const queryClient = new QueryClient();

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  const { colorMode } = useColorMode();

  return (
    <GestureHandlerRootView>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
        </QueryClientProvider>
      </I18nextProvider>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default Providers;
