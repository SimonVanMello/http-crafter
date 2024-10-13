import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { Button, ButtonText } from '@app/components/gluestack-ui/button';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import SectionSwitch from '@app/components/section/SectionSwitch';
import useColorMode from '@app/hooks/useColorMode.hook';

const SettingsScreen = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.settings.title')} className="gap-4">
      <Section title={t('screens.settings.appearance')}>
        <SectionSwitch
          label={t('screens.settings.darkMode')}
          value={isDarkMode}
          onChange={toggleColorMode}
        />
      </Section>
      <Section>
        <Link href="/settings/details" asChild>
          <Button>
            <ButtonText>Navigate to details page</ButtonText>
          </Button>
        </Link>
      </Section>
    </PageView>
  );
};

export default SettingsScreen;
