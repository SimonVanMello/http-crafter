import { useTranslation } from 'react-i18next';

import { Heading } from '@app/components/gluestack-ui/heading';
import { Text } from '@app/components/gluestack-ui/text';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.home.title')} className="gap-4">
      <Section>
        <Heading>Hello world!</Heading>
        <Text>Text</Text>
      </Section>
    </PageView>
  );
};

export default HomeScreen;