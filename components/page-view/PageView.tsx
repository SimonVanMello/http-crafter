import { PropsWithChildren } from 'react';
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';

import cn from '@app/utils/cn.utils';

import { Box } from '../gluestack-ui/box';
import PageHeader from './PageHeader';

interface Props {
  title: string;
  className?: string;
  centerTitle?: boolean;
  showBackButton?: boolean;
  asScrollView?: boolean;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const PageView = (props: PropsWithChildren<Props>) => {
  const {
    title,
    className,
    centerTitle,
    showBackButton,
    asScrollView = true,
    onRefresh,
    isRefreshing,
    children,
  } = props;

  const canRefresh = onRefresh && typeof isRefreshing === 'boolean';

  return (
    <SafeAreaView className="h-full bg-background-100 dark:bg-background-0">
      <PageHeader
        title={title}
        centerTitle={centerTitle}
        showBackButton={showBackButton}
      />
      {asScrollView && (
        <ScrollView
          contentContainerClassName={cn('p-4', className)}
          refreshControl={
            canRefresh ? (
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            ) : undefined
          }
        >
          {children}
        </ScrollView>
      )}
      {!asScrollView && (
        <Box className={cn('p-4 flex-1', className)}>{children}</Box>
      )}
    </SafeAreaView>
  );
};

export default PageView;
