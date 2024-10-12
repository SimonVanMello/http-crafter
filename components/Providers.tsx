import { PropsWithChildren } from 'react';

import { GluestackUIProvider } from '@app/components/gluestack-ui/gluestack-ui-provider';
import useColorMode from '@app/hooks/useColorMode.hook';

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  const { colorMode } = useColorMode();

  return <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>;
};

export default Providers;
