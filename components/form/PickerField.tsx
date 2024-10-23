import { Item } from 'react-native-picker-select';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '../gluestack-ui/form-control';
import Picker from '../Picker';
import SectionItem from '../section/SectionItem';

interface Props<T> {
  name: string;
  label: string;
  items: T[];
  labelSelector: (item: T) => string;
  valueSelector: (item: T) => string;
  isDisabled?: boolean;
  placeholder?: Item | {};
  className?: string;
}

// TODO: use RHF's Controller component
const PickerField = <T,>(props: Props<T>) => {
  const {
    name,
    label,
    items,
    labelSelector,
    valueSelector,
    isDisabled,
    placeholder = {},
    className,
  } = props;

  const { watch, setValue } = useFormContext();

  return (
    <FormControl className={className}>
      <SectionItem className="flex flex-row items-center mt-1">
        <FormControlLabel className="w-1/3">
          <FormControlLabelText className="font-bold">
            {label}
          </FormControlLabelText>
        </FormControlLabel>
        <Picker
          items={items}
          labelSelector={labelSelector}
          valueSelector={valueSelector}
          value={watch(name)}
          onChange={(value) => setValue(name, value)}
          isDisabled={isDisabled}
          placeholder={placeholder}
          className="w-2/3"
        />
      </SectionItem>
    </FormControl>
  );
};

export default PickerField;
