import { DefaultValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Field from '@app/components/form/Field';
import Form from '@app/components/form/Form';
import PickerField from '@app/components/form/PickerField';
import { Divider } from '@app/components/gluestack-ui/divider';
import Section from '@app/components/section/Section';
import Protocol from '@app/enums/Protocol.enum';

import CreateApi from '../models/CreateApi.model';

interface Props<T extends CreateApi> {
  initialValues: DefaultValues<T>;
  onSubmit: (values: T) => void;
}

const ApiForm = <T extends CreateApi>(props: Props<T>) => {
  const { initialValues, onSubmit } = props;

  const { t } = useTranslation();

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <Section>
        <Field
          label={t('features.apis.name')}
          name="name"
          isRequired
          autoCapitalize="sentences"
        />
        <Divider />
        <PickerField
          label={t('features.apis.protocol')}
          name="protocol"
          items={Object.values(Protocol)}
          labelSelector={(item) => item}
          valueSelector={(item) => item}
        />
        <Divider />
        <Field
          label={t('features.apis.host')}
          name="host"
          isRequired
          keyboardType="url"
        />
        <Divider />
        <Field
          label={t('features.apis.port')}
          name="port"
          isRequired
          max={65535}
          keyboardType="numeric"
        />
      </Section>
    </Form>
  );
};

export default ApiForm;
