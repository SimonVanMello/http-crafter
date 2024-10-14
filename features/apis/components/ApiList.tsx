import { FlatList } from 'react-native';

import useApis from '../hooks/useApis.hook';
import ApiListItem from './ApiListItem';

const ApiList = () => {
  const { apis, isRefreshing, onRefresh } = useApis();

  return (
    <FlatList
      data={apis}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ApiListItem api={item} />}
      contentContainerClassName="gap-4"
      onRefresh={onRefresh}
      refreshing={isRefreshing}
    />
  );
};

export default ApiList;
