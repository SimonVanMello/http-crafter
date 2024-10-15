import { useTranslation } from 'react-i18next';

import { Heading } from '@app/components/gluestack-ui/heading';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import LoadingScreen from '@app/screens/Loading.screen';

import useApiById from '../hooks/useApiById.hook';

interface Props {
  apiId: number;
}

const ApiDetailsScreen = (props: Props) => {
  const { apiId } = props;

  const { api, onRefresh, isLoading } = useApiById(apiId);
  const { t } = useTranslation();

  if (!api) {
    return <LoadingScreen />;
  }

  return (
    <PageView
      title={api.name}
      onRefresh={onRefresh}
      isRefreshing={isLoading}
      showBackButton
    >
      <Section>
        <Heading>{api.url}</Heading>
      </Section>
    </PageView>
  );
};

export default ApiDetailsScreen;
