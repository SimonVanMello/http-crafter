import { useCallback, useEffect, useState } from 'react';

import Api from '@app/database/entities/Api.entity';

const useApiById = (apiId: number) => {
  const [api, setApi] = useState<Api | null>();
  const [isLoading, setIsLoading] = useState(true);

  const getApi = useCallback(async () => {
    setIsLoading(true);
    const queryResult = await Api.findOneBy({ id: apiId });
    setApi(queryResult);
    setIsLoading(false);
  }, [apiId]);

  useEffect(() => {
    getApi();
  }, [getApi, apiId]);

  return { api, onRefresh: getApi, isLoading };
};

export default useApiById;
