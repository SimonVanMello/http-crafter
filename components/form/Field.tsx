import { IInputFieldProps } from '@gluestack-ui/input/lib/typescript/types';
import { AlertCircleIcon } from 'lucide-react-native';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '../gluestack-ui/form-control';
import { Input, InputField } from '../gluestack-ui/input';

interface Props extends IInputFieldProps {
  name: string;
  label?: string;
  className?: string;
  helperText?: string;
}

const Field = (props: Props) => {
  const { name, label, className, helperText, ...rest } = props;

  const {
    register,
    getFieldState,
    formState: { errors },
  } = useFormContext();
  const { invalid, isTouched } = getFieldState(name);

  const field = register(name, {
    setValueAs: (v) => (v === '' ? undefined : v),
  });

  return (
    <FormControl className={className} isInvalid={isTouched && invalid}>
      {!!label && (
        <FormControlLabel>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}
      <Input className="my-1">
        <InputField tabIndex={0} {...rest} {...field} />
      </Input>
      {!!helperText && (
        <FormControlHelper>
          <FormControlHelperText>{helperText}</FormControlHelperText>
        </FormControlHelper>
      )}
      {!!errors[name] && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            {errors[name]?.message?.toString()}
          </FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
};

export default Field;
