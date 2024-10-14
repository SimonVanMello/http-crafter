import { useCallback, useEffect, useState } from 'react';

import Api from '@app/database/entities/Api.entity';

const useApis = () => {
  const [apis, setApis] = useState<Api[]>();
  const [isRefreshing, setIsRefreshing] = useState(true);

  const getApis = useCallback(async () => {
    setIsRefreshing(true);
    const queryResult = await Api.find();
    setApis(queryResult);
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    getApis();
  }, [getApis]);

  return { apis, onRefresh: getApis, isRefreshing };
};

export default useApis;
