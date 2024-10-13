import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

import { GluestackUIProvider } from '@app/components/gluestack-ui/gluestack-ui-provider';
import useColorMode from '@app/hooks/useColorMode.hook';
import i18n from '@app/translations/i18n';

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  const { colorMode } = useColorMode();

  return (
    <I18nextProvider i18n={i18n}>
      <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
    </I18nextProvider>
  );
};

export default Providers;
