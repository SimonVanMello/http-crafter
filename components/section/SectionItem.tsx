import { PropsWithChildren } from 'react';

import cn from '@app/utils/cn.utils';

import { Box, BoxProps } from '../gluestack-ui/box';

interface Props extends BoxProps {}

const SectionItem = (props: PropsWithChildren<Props>) => {
  const { className, children, ...rest } = props;

  return (
    <Box className={cn('px-4 py-2', className)} {...rest}>
      {children}
    </Box>
  );
};

export default SectionItem;
