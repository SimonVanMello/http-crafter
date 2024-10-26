import { useMemo } from 'react';
import { useAtom } from 'jotai';

import { Heading } from '@app/components/gluestack-ui/heading';
import PageView from '@app/components/page-view/PageView';
import Section from '@app/components/section/Section';
import SectionItem from '@app/components/section/SectionItem';
import LoadingScreen from '@app/screens/Loading.screen';

import { folderAtom } from '../atoms/folders.atoms';
import AddMockFolder from '../components/AddMockFolder';
import FolderList from '../components/FolderList';

interface Props {
  apiId: string;
  folderId: string;
}

const FolderDetailsScreen = (props: Props) => {
  const { apiId, folderId } = props;

  const atom = useMemo(() => folderAtom(folderId), [folderId]);
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
      backButtonHref={
        data.parent
          ? `/apis/${apiId}/folders/${data.parent.id}`
          : `/apis/${apiId}`
      }
    >
      <Section>
        <SectionItem>
          <Heading>{data.name}</Heading>
        </SectionItem>
      </Section>
      {!!data.children.length && (
        <FolderList apiId={apiId} folders={data.children} />
      )}
      <AddMockFolder parentFolder={data} />
    </PageView>
  );
};

export default FolderDetailsScreen;
