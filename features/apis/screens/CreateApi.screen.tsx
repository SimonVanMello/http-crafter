import { useTranslation } from 'react-i18next';

import PageView from '@app/components/page-view/PageView';

import ApiForm from '../components/ApiForm';
import CreateApi from '../models/CreateApi.model';

const initialValues: CreateApi = {
  name: '',
  host: '',
  port: 0,
  protocol: 'https',
};

const CreateApiScreen = () => {
  const { t } = useTranslation();

  const handleSubmit = (values: CreateApi) => {
    console.log(values);
  };

  return (
    <PageView title={t('screens.createApi.title')} showBackButton>
      <ApiForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageView>
  );
};

export default CreateApiScreen;
