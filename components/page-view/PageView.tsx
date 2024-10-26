import { PropsWithChildren, ReactNode } from 'react';
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Href } from 'expo-router';

import cn from '@app/utils/cn.utils';

import { Box } from '../gluestack-ui/box';
import PageHeader from './PageHeader';

interface Props<T extends string | object> {
  title: string;
  className?: string;
  centerTitle?: boolean;
  showBackButton?: boolean;
  backButtonHref?: Href<T>;
  asScrollView?: boolean;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  actions?: ReactNode;
}

const PageView = <T extends string | object>(
  props: PropsWithChildren<Props<T>>,
) => {
  const {
    title,
    className,
    centerTitle,
    showBackButton,
    backButtonHref,
    asScrollView = true,
    onRefresh,
    isRefreshing,
    actions,
    children,
  } = props;

  const canRefresh = onRefresh && typeof isRefreshing === 'boolean';

  return (
    <SafeAreaView className="h-full bg-background-100 dark:bg-background-0">
      <PageHeader
        title={title}
        centerTitle={centerTitle}
        showBackButton={showBackButton}
        backButtonHref={backButtonHref}
        actions={actions}
      />
      {asScrollView && (
        <ScrollView
          contentContainerClassName={cn('px-4 pt-4 gap-4', className)}
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
        <Box className={cn('px-4 pt-4 flex-1', className)}>{children}</Box>
      )}
    </SafeAreaView>
  );
};

export default PageView;
