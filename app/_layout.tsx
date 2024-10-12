import { Stack } from 'expo-router';

import '@app/global.css';

import Providers from '@app/components/Providers';

if (__DEV__) {
  require('../ReactotronConfig');
}

const Layout = () => {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Providers>
  );
};

export default Layout;
