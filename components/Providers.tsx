import { PropsWithChildren } from 'react';

import { GluestackUIProvider } from '@app/components/gluestack-ui/gluestack-ui-provider';

const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  return <GluestackUIProvider mode="light">{children}</GluestackUIProvider>;
};

export default Providers;
