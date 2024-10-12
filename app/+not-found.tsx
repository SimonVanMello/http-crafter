import { Link, Stack } from 'expo-router';

import { Box } from '@app/components/gluestack-ui/box';

const NotFound = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! This screen doesn\'t exist.' }} />
      <Box className="flex-1 justify-center items-center">
        <Link href="/">Go to home screen</Link>
      </Box>
    </>
  );
};

export default NotFound;
