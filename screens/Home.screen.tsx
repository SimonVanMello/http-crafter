import { useTranslation } from 'react-i18next';

import { Button, ButtonText } from '@app/components/gluestack-ui/button';
import { Heading } from '@app/components/gluestack-ui/heading';
import { Text } from '@app/components/gluestack-ui/text';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/Section';
import useColorMode from '@app/hooks/useColorMode.hook';

const HomeScreen = () => {
  const { toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.home.title')} className="gap-4">
      <Section>
        <Heading>Hello world!</Heading>
        <Text>Text</Text>
        <Button onPress={toggleColorMode} className="mt-2">
          <ButtonText>Toggle color mode</ButtonText>
        </Button>
      </Section>
    </PageView>
  );
};

export default HomeScreen;
