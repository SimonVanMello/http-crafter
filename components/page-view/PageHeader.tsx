import { StatusBar } from 'expo-status-bar';

import useColorMode from '@app/hooks/useColorMode.hook';
import cn from '@app/utils/cn.utils';

import { Box } from '../gluestack-ui/box';
import { Heading } from '../gluestack-ui/heading';

interface Props {
  title: string;
  centerTitle?: boolean;
}

const PageHeader = (props: Props) => {
  const { title, centerTitle } = props;

  const { invertedColorMode } = useColorMode();

  return (
    <Box
      className={cn(
        'h-16 flex justify-center bg-background-100 px-4 dark:bg-background-0',
        {
          'items-center': centerTitle,
        },
      )}
    >
      {/* TODO: update status bar background color for Android */}
      <StatusBar style={invertedColorMode} />
      <Heading className="text-3xl">{title}</Heading>
    </Box>
  );
};

export default PageHeader;
