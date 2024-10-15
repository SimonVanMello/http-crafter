import { ReactNode } from 'react';
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
  actions?: ReactNode;
}

const PageHeader = (props: Props) => {
  const { title, centerTitle, showBackButton, actions } = props;

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
      {showBackButton && (
        <Box className="flex flex-row justify-between">
          <BackButton className="w-fit justify-start" />
          <Box>{actions}</Box>
        </Box>
      )}
      {!showBackButton && (
        <Box className="flex flex-row justify-end">{actions}</Box>
      )}
      <Heading className="text-3xl">{title}</Heading>
    </Box>
  );
};

export default PageHeader;
