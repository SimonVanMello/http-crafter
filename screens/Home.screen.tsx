import { useTranslation } from 'react-i18next';

import { Heading } from '@app/components/gluestack-ui/heading';
import { Text } from '@app/components/gluestack-ui/text';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import SectionItem from '@app/components/section/SectionItem';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.home.title')}>
      <Section>
        <SectionItem>
          <Heading>Hello world!</Heading>
          <Text>Text</Text>
        </SectionItem>
      </Section>
    </PageView>
  );
};

export default HomeScreen;
