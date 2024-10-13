import { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import cn from '@app/utils/cn.utils';

import PageHeader from './PageHeader';

interface Props {
  title: string;
  className?: string;
  centerTitle?: boolean;
}

const PageView = (props: PropsWithChildren<Props>) => {
  const { title, className, centerTitle, children, ...rest } = props;

  return (
    <SafeAreaView className="h-full bg-background-100 dark:bg-background-0">
      <PageHeader title={title} centerTitle={centerTitle} />
      <ScrollView {...rest} contentContainerClassName={cn('p-4', className)}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageView;
