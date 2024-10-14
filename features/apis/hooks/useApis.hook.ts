import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import apisAtom from '@app/atoms/apis.atom';
import Api from '@app/database/entities/Api.entity';

const useApis = (refreshOnMount = true) => {
  const [apis, setApis] = useAtom(apisAtom);
  const [isRefreshing, setIsRefreshing] = useState(true);

  const getApis = useCallback(async () => {
    setIsRefreshing(true);
    const queryResult = await Api.find();
    setApis(queryResult);
    setIsRefreshing(false);
  }, [setApis]);

  const createApi = useCallback(
    async (api: Api) => {
      await api.save();
      getApis();
    },
    [getApis],
  );

  useEffect(() => {
    if (refreshOnMount) {
      getApis();
    }
  }, [getApis, refreshOnMount]);

  return { apis, onRefresh: getApis, isRefreshing, createApi };
};

export default useApis;
