import { useLocalSearchParams } from 'expo-router';

import EditApiScreen from '@app/features/apis/screens/EditApi.screen';

const Page = () => {
  const { id } = useLocalSearchParams();

  return <EditApiScreen apiId={id.toString()} />;
};

export default Page;
