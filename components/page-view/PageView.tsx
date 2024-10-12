import { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import cn from '@app/utils/cn.utils';

import PageHeader from './PageHeader';

interface Props {
  title: string;
  className?: string;
}

const PageView = (props: PropsWithChildren<Props>) => {
  const { title, className, children, ...rest } = props;

  return (
    <SafeAreaView className="h-full bg-background-100 dark:bg-background-0">
      <PageHeader title={title} />
      <ScrollView {...rest} contentContainerClassName={cn('p-4', className)}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageView;
