import { useRouter } from 'expo-router';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';

import PageView from '@app/components/page-view/PageView';
import Api from '@app/database/entities/Api.entity';
import useAppToast from '@app/hooks/useAppToast.hook';

import { createApiAtom } from '../atoms/apis.atoms';
import ApiForm from '../components/ApiForm';
import CreateApi from '../models/CreateApi.model';

const initialValues: CreateApi = {
  name: '',
  host: '',
  port: 443,
  protocol: 'https',
};

const CreateApiScreen = () => {
  const { t } = useTranslation();

  const toast = useAppToast();
  const router = useRouter();
  const [{ mutateAsync }] = useAtom(createApiAtom);

  const handleSubmit = async (values: CreateApi) => {
    try {
      const api = Api.fromCreateApi(values);
      await mutateAsync(api);
      router.push('/apis');
    } catch {
      toast.error();
    }
  };

  return (
    <PageView title={t('screens.createApi.title')} showBackButton>
      <ApiForm initialValues={initialValues} onSubmit={handleSubmit} />
    </PageView>
  );
};

export default CreateApiScreen;
