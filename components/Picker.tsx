import RNPickerSelect, { Item } from 'react-native-picker-select';

import useColors from '@app/hooks/useColors.hook';
import cn from '@app/utils/cn.utils';

import { Box } from './gluestack-ui/box';

interface Props<T> {
  items: T[];
  labelSelector: (item: T) => string;
  valueSelector: (item: T) => string;
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: Item | {};
  className?: string;
}

const Picker = <T,>(props: Props<T>) => {
  const {
    items,
    labelSelector,
    valueSelector,
    value,
    onChange,
    isDisabled,
    placeholder,
    className,
  } = props;

  const { getThemeColor } = useColors();

  return (
    <Box className={cn('px-3', className)}>
      <RNPickerSelect
        value={value}
        items={items.map((item) => ({
          label: labelSelector(item),
          value: valueSelector(item),
        }))}
        onValueChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
        style={{
          inputIOS: {
            color: getThemeColor('typography', 900),
          },
          inputAndroid: {
            color: getThemeColor('typography', 900),
          },
        }}
      />
    </Box>
  );
};

export default Picker;
