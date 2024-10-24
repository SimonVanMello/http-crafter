import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';

import { queryClient } from '@app/components/providers/Providers';
import Api from '@app/database/entities/Api.entity';

export const apisAtom = atomWithQuery(
  () => ({
    queryKey: ['apis'],
    queryFn: async () => {
      const apis = await Api.find();
      return apis;
    },
  }),
  () => queryClient,
);

export const apiAtom = (id: number) =>
  atomWithQuery(
    () => ({
      queryKey: ['apis', id],
      queryFn: async ({ queryKey: [, id] }) => {
        const api = await Api.findOneBy({ id: id as number });

        return api;
      },
    }),
    () => queryClient,
  );

export const createApiAtom = atomWithMutation(() => ({
  mutationFn: async (api: Api) => {
    await api.save();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['apis'],
    });
  },
}));

export const deleteApiAtom = atomWithMutation(() => ({
  mutationFn: async (id: number) => {
    await Api.delete(id);
  },
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['apis'],
    });
  },
}));

export const updateApiAtom = atomWithMutation(() => ({
  mutationFn: async (api: Api) => {
    await api.save();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['apis'],
    });
  },
}));
