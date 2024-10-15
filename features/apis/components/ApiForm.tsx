import Field from '@app/components/form/Field';
import Form from '@app/components/form/Form';

import CreateApi from '../models/CreateApi.model';

interface Props {
  initialValues: CreateApi;
  onSubmit: (values: CreateApi) => void;
}

const ApiForm = (props: Props) => {
  const { initialValues, onSubmit } = props;

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <Field name="name" label="Name" />
      <Field name="host" label="Host" />
      <Field name="port" label="Port" />
      <Field name="protocol" label="Protocol" />
    </Form>
  );
};

export default ApiForm;
