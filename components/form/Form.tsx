import { PropsWithChildren } from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Box } from '../gluestack-ui/box';
import { Button, ButtonSpinner, ButtonText } from '../gluestack-ui/button';

interface Props<T extends FieldValues> {
  initialValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  submitLabel?: string;
  className?: string;
}

const Form = <T extends FieldValues>(props: PropsWithChildren<Props<T>>) => {
  const { t } = useTranslation();
  const {
    initialValues,
    onSubmit,
    submitLabel = t('common.submit'),
    className,
    children,
  } = props;

  const methods = useForm<T>({ defaultValues: initialValues, mode: 'all' });

  return (
    <FormProvider {...methods}>
      <Box className={className}>{children}</Box>
      <Button
        onPress={methods.handleSubmit(onSubmit)}
        isDisabled={methods.formState.isSubmitting}
        className="mt-4"
      >
        {methods.formState.isSubmitting && <ButtonSpinner />}
        <ButtonText>{submitLabel}</ButtonText>
      </Button>
    </FormProvider>
  );
};

export default Form;
