import { useLocalSearchParams } from 'expo-router';

import FolderDetailsScreen from '@app/features/folders/screens/FolderDetails.screen';

const Page = () => {
  const { apiId, folderId } = useLocalSearchParams();

  return (
    <FolderDetailsScreen
      apiId={apiId.toString()}
      folderId={folderId.toString()}
    />
  );
};

export default Page;
