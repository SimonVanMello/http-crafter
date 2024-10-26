import { useLocalSearchParams } from 'expo-router';

import EditApiScreen from '@app/features/apis/screens/EditApi.screen';

const Page = () => {
  const { apiId } = useLocalSearchParams();

  return <EditApiScreen apiId={apiId.toString()} />;
};

export default Page;
