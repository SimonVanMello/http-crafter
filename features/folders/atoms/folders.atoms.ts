import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';

import { queryClient } from '@app/components/providers/Providers';
import Folder from '@app/database/entities/Folder.entity';

export const folderAtom = (id: string) =>
  atomWithQuery(
    () => ({
      queryKey: ['folders', id],
      queryFn: async () => {
        const folder = await Folder.findOne({
          where: { id },
          relations: ['children', 'parent'],
        });

        return folder;
      },
    }),
    () => queryClient,
  );

export const createFolderAtom = atomWithMutation(() => ({
  mutationFn: async (folder: Folder) => {
    await folder.save();
  },
  onSuccess: (_, { parent, api }) => {
    if (parent) {
      queryClient.invalidateQueries({
        queryKey: ['folders', parent.id],
      });
    } else if (api) {
      queryClient.invalidateQueries({
        queryKey: ['apis', api.id],
      });
    }
  },
}));
