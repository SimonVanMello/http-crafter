import { useTranslation } from 'react-i18next';

import PageView from '@app/components/page-view/PageView';

import ApiList from '../components/ApiList';

const ApiListScreen = () => {
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.apis.title')} asScrollView={false}>
      <ApiList />
    </PageView>
  );
};

export default ApiListScreen;
