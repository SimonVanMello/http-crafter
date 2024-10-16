import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { Heading } from '@app/components/gluestack-ui/heading';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import SectionItem from '@app/components/section/SectionItem';
import LoadingScreen from '@app/screens/Loading.screen';

import { apiAtom } from '../atoms/apis.atoms';

interface Props {
  apiId: number;
}

const ApiDetailsScreen = (props: Props) => {
  const { apiId } = props;

  const atom = useMemo(() => apiAtom(apiId), [apiId]);
  const [{ data, isPending, refetch }] = useAtom(atom);

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <PageView
      title={data.name}
      onRefresh={refetch}
      isRefreshing={isPending}
      showBackButton
    >
      <Section>
        <SectionItem>
          <Heading>{data.url}</Heading>
        </SectionItem>
      </Section>
    </PageView>
  );
};

export default ApiDetailsScreen;
