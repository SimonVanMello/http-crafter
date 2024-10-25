import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { useHydrateAtoms } from 'jotai/react/utils';
import { I18nextProvider } from 'react-i18next';

import 'react-native-get-random-values';
import 'reflect-metadata';

import GluestackUIProvider from '@app/components/gluestack-ui/gluestack-ui-provider';
import i18n from '@app/translations/i18n';

import '@app/database';

const HydrateAtoms = ({ children }: PropsWithChildren) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

export const queryClient = new QueryClient();

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <GestureHandlerRootView>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <HydrateAtoms>
            <GluestackUIProvider>{children}</GluestackUIProvider>
          </HydrateAtoms>
        </QueryClientProvider>
      </I18nextProvider>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default Providers;
