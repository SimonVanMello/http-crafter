import { useQueryClient } from '@tanstack/react-query';
import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';

import Api from '@app/database/entities/Api.entity';

export const apiAtom = (id: number) =>
  atomWithQuery(() => ({
    queryKey: ['api', id],
    queryFn: async ({ queryKey: [, id] }) => {
      const api = await Api.findOneBy({ id: id as number });

      return api;
    },
  }));

export const apisAtom = atomWithQuery(() => ({
  queryKey: ['apis'],
  queryFn: async () => {
    const apis = await Api.find();
    return apis;
  },
}));

export const createApiAtom = atomWithMutation(() => {
  const queryClient = useQueryClient();

  return {
    mutationFn: async (api: Api) => {
      await api.save();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['apis'],
      });
    },
  };
});

export const deleteApiAtom = atomWithMutation(() => {
  const queryClient = useQueryClient();

  return {
    mutationFn: async (id: number) => {
      await Api.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['apis'],
      });
    },
  };
});
