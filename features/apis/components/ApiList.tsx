import { FlatList } from 'react-native';
import { useAtom } from 'jotai';

import { apisAtom } from '../atoms/apis.atoms';
import ApiListItem from './ApiListItem';

const ApiList = () => {
  const [{ data, isPending, refetch }] = useAtom(apisAtom);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ApiListItem key={item.id} api={item} />}
      contentContainerClassName="gap-4"
      onRefresh={refetch}
      refreshing={isPending}
    />
  );
};

export default ApiList;
