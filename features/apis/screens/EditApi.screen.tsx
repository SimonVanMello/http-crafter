import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';

import PageView from '@app/components/page-view/PageView';
import Api from '@app/database/entities/Api.entity';
import useAppToast from '@app/hooks/useAppToast.hook';
import LoadingScreen from '@app/screens/Loading.screen';

import { apiAtom, updateApiAtom } from '../atoms/apis.atoms';
import ApiForm from '../components/ApiForm';

interface Props {
  apiId: number;
}

const EditApiScreen = (props: Props) => {
  const { apiId } = props;

  const { t } = useTranslation();

  const toast = useAppToast();
  const router = useRouter();
  const [{ mutateAsync }] = useAtom(updateApiAtom);

  const atom = useMemo(() => apiAtom(apiId), [apiId]);
  const [{ data }] = useAtom(atom);

  if (!data) {
    return <LoadingScreen />;
  }

  const handleSubmit = async (api: Api) => {
    try {
      await mutateAsync(api);
      router.navigate(`/apis/${apiId}`);
    } catch {
      toast.error();
    }
  };

  return (
    <PageView title={t('screens.editApi.title')} showBackButton>
      <ApiForm onSubmit={handleSubmit} initialValues={data} />
    </PageView>
  );
};

export default EditApiScreen;
