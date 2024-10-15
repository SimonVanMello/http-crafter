import { useRouter } from 'expo-router';
import { Plus } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

import { Button, ButtonIcon } from '@app/components/gluestack-ui/button';
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
        <Button variant="link" onPress={() => router.push('/apis/create')}>
          <ButtonIcon as={Plus} />
        </Button>
      }
    >
      <ApiList />
    </PageView>
  );
};

export default ApiListScreen;
