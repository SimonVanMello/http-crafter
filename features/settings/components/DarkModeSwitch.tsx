import { useTranslation } from 'react-i18next';

import SectionSwitch from '@app/components/section/SectionSwitch';
import useColorMode from '@app/hooks/useColorMode.hook';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <SectionSwitch
      label={t('screens.settings.darkMode')}
      value={isDarkMode}
      onChange={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
