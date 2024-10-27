import React, { PropsWithChildren } from 'react';

import cn from '@app/utils/cn.utils';

import { Box, BoxProps } from '../gluestack-ui/box';
import { Divider } from '../gluestack-ui/divider';
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
        {React.Children.map(children, (child, index) => (
          <>
            {child}
            {index < React.Children.count(children) - 1 && <Divider />}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Section;
