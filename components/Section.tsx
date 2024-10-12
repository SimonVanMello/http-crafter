import { PropsWithChildren } from 'react';

import cn from '@app/utils/cn.utils';

import { Box, BoxProps } from './gluestack-ui/box';

const Section = (props: PropsWithChildren<BoxProps>) => {
  const { children, className, ...rest } = props;

  return (
    <Box
      className={cn(
        'bg-background-0 rounded px-4 py-3 dark:bg-background-50',
        className,
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Section;
