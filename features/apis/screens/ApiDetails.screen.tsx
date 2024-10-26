import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { Heading } from '@app/components/gluestack-ui/heading';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import SectionItem from '@app/components/section/SectionItem';
import AddMockFolder from '@app/features/folders/components/AddMockFolder';
import FolderList from '@app/features/folders/components/FolderList';
import LoadingScreen from '@app/screens/Loading.screen';

import { apiAtom } from '../atoms/apis.atoms';
import ApiActionsheetButton from '../components/ApiActionsheetButton';

interface Props {
  apiId: string;
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
      actions={<ApiActionsheetButton apiId={apiId} />}
    >
      <Section>
        <SectionItem>
          <Heading>{data.url}</Heading>
        </SectionItem>
      </Section>
      {!!data.folders.length && (
        <FolderList apiId={apiId} folders={data.folders} />
      )}
      <AddMockFolder api={data} />
    </PageView>
  );
};

export default ApiDetailsScreen;
