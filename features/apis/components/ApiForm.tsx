import Field from '@app/components/form/Field';
import Form from '@app/components/form/Form';
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
        <Field name="protocol" label="Protocol" isRequired />
        <Divider />
        <Field name="host" label="Host" isRequired />
        <Divider />
        <Field name="port" label="Port" isRequired />
      </Section>
    </Form>
  );
};

export default ApiForm;
