import { useLocalSearchParams } from 'expo-router';

import ApiDetailsScreen from '@app/features/apis/screens/ApiDetails.screen';

const Page = () => {
  const { apiId } = useLocalSearchParams();

  return <ApiDetailsScreen apiId={apiId.toString()} />;
};

export default Page;
