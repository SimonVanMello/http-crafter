import { KeyboardTypeOptions } from 'react-native';
import { IInputFieldProps } from '@gluestack-ui/input/lib/typescript/types';
import { Controller, useFormContext, ValidationRule } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '../gluestack-ui/form-control';
import { Input, InputField } from '../gluestack-ui/input';
import SectionItem from '../section/SectionItem';

interface Props extends IInputFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'password';
  className?: string;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  pattern?: ValidationRule<RegExp>;
  validate?: (value: string) => boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCorrect?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const Field = (props: Props) => {
  const {
    name,
    label,
    type = 'text',
    className,
    maxLength,
    minLength,
    max,
    min,
    pattern,
    validate,
    keyboardType,
    autoCorrect = false,
    autoCapitalize = 'none',
    ...rest
  } = props;

  const { t } = useTranslation();

  const { control, getFieldState } = useFormContext();
  const { invalid, isTouched } = getFieldState(name);

  return (
    <FormControl className={className} isInvalid={isTouched && invalid}>
      <SectionItem className="flex flex-row items-center">
        <FormControlLabel className="w-1/3 mt-1">
          <FormControlLabelText className="font-bold">
            {label}
          </FormControlLabelText>
        </FormControlLabel>

        <Controller
          control={control}
          name={name}
          rules={{
            required: props.isRequired,
            maxLength,
            minLength,
            max,
            min,
            pattern,
            validate,
          }}
          disabled={props.isDisabled}
          render={({ field }) => (
            <Input className="w-2/3 border-0 h-7">
              <InputField
                tabIndex={0}
                {...rest}
                {...field}
                type={type}
                value={field.value.toString()}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                onChangeText={(value) => field.onChange(value)}
                placeholder={
                  props.isRequired
                    ? t('common.forms.required')
                    : t('common.forms.optional')
                }
              />
            </Input>
          )}
        />
      </SectionItem>
    </FormControl>
  );
};

export default Field;
