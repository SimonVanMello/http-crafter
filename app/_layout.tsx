import { Stack } from 'expo-router/stack';

import '@app/global.css';

import Providers from '@app/components/Providers';

if (__DEV__) {
  require('../ReactotronConfig');
}

const Layout = () => {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
    </Providers>
  );
};

export default Layout;
