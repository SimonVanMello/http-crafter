import { Stack } from 'expo-router';

if (__DEV__) {
  require('../ReactotronConfig');
}

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
