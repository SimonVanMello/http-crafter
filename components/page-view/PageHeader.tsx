import { StatusBar } from 'expo-status-bar';

import useColorMode from '@app/hooks/useColorMode.hook';
import cn from '@app/utils/cn.utils';

import { Box } from '../gluestack-ui/box';
import { Heading } from '../gluestack-ui/heading';
import BackButton from '../navigation/BackButton';

interface Props {
  title?: string;
  centerTitle?: boolean;
  showBackButton?: boolean;
}

const PageHeader = (props: Props) => {
  const { title, centerTitle, showBackButton } = props;

  const { invertedColorMode } = useColorMode();

  return (
    <Box
      className={cn(
        'flex justify-center gap-2 bg-background-100 px-4 dark:bg-background-0',
        {
          'justify-center': centerTitle && !showBackButton,
        },
      )}
    >
      {/* TODO: update status bar background color for Android */}
      <StatusBar style={invertedColorMode} />
      {showBackButton && <BackButton className="w-fit justify-start" />}
      <Heading className="text-3xl">{title}</Heading>
    </Box>
  );
};

export default PageHeader;
