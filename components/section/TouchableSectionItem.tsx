import { forwardRef, PropsWithChildren } from 'react';
import { TouchableHighlight } from 'react-native';

import SectionItem, { SectionItemProps } from './SectionItem';

const TouchableSectionItem = forwardRef<
  any,
  PropsWithChildren<SectionItemProps>
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <TouchableHighlight ref={ref}>
      <SectionItem {...rest}>{children}</SectionItem>
    </TouchableHighlight>
  );
});

TouchableSectionItem.displayName = 'TouchableSectionItem';

export default TouchableSectionItem;
