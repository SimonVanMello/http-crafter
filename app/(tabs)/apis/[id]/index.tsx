import { useLocalSearchParams } from 'expo-router';

import ApiDetailsScreen from '@app/features/apis/screens/ApiDetails.screen';

const Page = () => {
  const { id } = useLocalSearchParams();

  return <ApiDetailsScreen apiId={id.toString()} />;
};

export default Page;
