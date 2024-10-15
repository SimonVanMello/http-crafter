import { SafeAreaView } from 'react-native';

import { Box } from '@app/components/gluestack-ui/box';
import { Spinner } from '@app/components/gluestack-ui/spinner';
import PageHeader from '@app/components/page-view/PageHeader';

interface Props {
  showBackButton?: boolean;
}

const LoadingScreen = (props: Props) => {
  const { showBackButton = true } = props;

  return (
    <SafeAreaView className="h-full bg-background-100 dark:bg-background-0">
      <PageHeader showBackButton={showBackButton} />
      <Box className="flex-1 justify-center items-center">
        <Spinner size="large" />
      </Box>
    </SafeAreaView>
  );
};

export default LoadingScreen;
