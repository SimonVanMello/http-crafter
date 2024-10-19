import { IInputFieldProps } from '@gluestack-ui/input/lib/typescript/types';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  FormControl,
  // FormControlError,
  // FormControlErrorIcon,
  // FormControlErrorText,
  // FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
} from '../gluestack-ui/form-control';
import { Input, InputField } from '../gluestack-ui/input';
import SectionItem from '../section/SectionItem';

interface Props extends IInputFieldProps {
  name: string;
  label: string;
  className?: string;
  helperText?: string;
}

const Field = (props: Props) => {
  const { name, label, className, helperText, ...rest } = props;

  const { t } = useTranslation();

  const {
    register,
    setValue,
    getFieldState,
    formState: { errors },
  } = useFormContext();
  const { invalid, isTouched } = getFieldState(name);

  const field = register(name, { required: props.isRequired });

  return (
    <FormControl className={className} isInvalid={isTouched && invalid}>
      <SectionItem className="flex flex-row items-center">
        <FormControlLabel className="w-1/3">
          <FormControlLabelText className="font-bold">
            {label}
          </FormControlLabelText>
        </FormControlLabel>
        <Input className="w-2/3 border-0">
          <InputField
            tabIndex={0}
            {...rest}
            {...field}
            onChangeText={(value) => setValue(name, value)}
            placeholder={
              props.isRequired
                ? t('common.forms.required')
                : t('common.forms.optional')
            }
          />
        </Input>
      </SectionItem>
      {/* {!!helperText && (
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
      )} */}
    </FormControl>
  );
};

export default Field;
