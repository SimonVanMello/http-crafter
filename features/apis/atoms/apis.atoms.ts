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

export const apiAtom = (id: string) =>
  atomWithQuery(
    () => ({
      queryKey: ['apis', id],
      queryFn: async () => {
        const api = await Api.findOne({
          where: { id },
          relations: ['folders'],
        });

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
  mutationFn: async (id: string) => {
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
