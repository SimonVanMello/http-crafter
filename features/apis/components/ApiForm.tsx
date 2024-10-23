import Field from '@app/components/form/Field';
import Form from '@app/components/form/Form';
import PickerField from '@app/components/form/PickerField';
import { Divider } from '@app/components/gluestack-ui/divider';
import Section from '@app/components/section/Section';

import CreateApi from '../models/CreateApi.model';

interface Props {
  initialValues: CreateApi;
  onSubmit: (values: CreateApi) => void;
}

const ApiForm = (props: Props) => {
  const { initialValues, onSubmit } = props;

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <Section>
        <Field name="name" label="Name" isRequired />
        <Divider />
        <PickerField
          label="Protocol"
          name="protocol"
          items={[{ value: 'http' }, { value: 'https' }]}
          labelSelector={(item) => item.value}
          valueSelector={(item) => item.value}
        />
        <Divider />
        <Field name="host" label="Host" isRequired />
        <Divider />
        <Field
          name="port"
          label="Port"
          isRequired
          max={65535}
          keyboardType="numeric"
        />
      </Section>
    </Form>
  );
};

export default ApiForm;
