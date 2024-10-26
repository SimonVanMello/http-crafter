import {
  Column,
  Entity,
  ManyToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

import Api from './Api.entity';
import BaseEntity from './Base.entity';

@Entity('folder')
@Tree('closure-table')
class Folder extends BaseEntity {
  @Column()
  name: string;

  @TreeParent()
  parent: Folder;

  @TreeChildren()
  children: Folder[];

  @ManyToOne(() => Api, (api) => api.folders, {
    onDelete: 'CASCADE',
  })
  api: Api;
}

export default Folder;
