import { useLocalSearchParams } from 'expo-router';

import ApiDetailsScreen from '@app/features/apis/screens/ApiDetails.screen';

const Page = () => {
  const { id } = useLocalSearchParams();

  return <ApiDetailsScreen apiId={parseInt(id.toString(), 10)} />;
};

export default Page;
