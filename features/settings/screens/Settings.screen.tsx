import { useTranslation } from 'react-i18next';

import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import DarkModeSwitch from '@app/features/settings/components/DarkModeSwitch';

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <PageView title={t('screens.settings.title')} className="gap-4">
      <Section title={t('screens.settings.appearance')}>
        <DarkModeSwitch />
      </Section>
    </PageView>
  );
};

export default SettingsScreen;
