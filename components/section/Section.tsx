import { PropsWithChildren } from 'react';

import cn from '@app/utils/cn.utils';

import { Box, BoxProps } from '../gluestack-ui/box';
import { Text } from '../gluestack-ui/text';

interface Props extends BoxProps {
  title?: string;
}

const Section = (props: PropsWithChildren<Props>) => {
  const { title, className, children, ...rest } = props;

  return (
    <Box className="gap-1">
      {!!title && (
        <Text className="px-4 text-md text-typography-400">{title}</Text>
      )}
      <Box className={cn('card', className)} {...rest}>
        {children}
      </Box>
    </Box>
  );
};

export default Section;
