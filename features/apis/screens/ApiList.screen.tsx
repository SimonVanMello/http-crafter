import { useRouter } from 'expo-router';
import { Plus } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import HeaderActionButton from '@app/components/HeaderActionButton';
import PageView from '@app/components/page-view/PageView';

import ApiList from '../components/ApiList';

const ApiListScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <PageView
      title={t('screens.apis.title')}
      asScrollView={false}
      actions={
        <HeaderActionButton
          icon={Plus}
          onPress={() => router.push('/apis/create')}
        />
      }
    >
      <ApiList />
    </PageView>
  );
};

export default ApiListScreen;
