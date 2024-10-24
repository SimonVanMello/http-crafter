import { forwardRef, PropsWithChildren } from 'react';

import cn from '@app/utils/cn.utils';

import { Box, BoxProps } from '../gluestack-ui/box';

export interface SectionItemProps extends BoxProps {}

const SectionItem = forwardRef<any, PropsWithChildren<SectionItemProps>>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <Box ref={ref} className={cn('px-4 py-2', className)} {...rest}>
        {children}
      </Box>
    );
  },
);

SectionItem.displayName = 'SectionItem';

export default SectionItem;
