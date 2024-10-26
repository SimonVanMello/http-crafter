import { Column, Entity, OneToMany } from 'typeorm';

import CreateApi from '@app/features/apis/models/CreateApi.model';

import BaseEntity from './Base.entity';
import Folder from './Folder.entity';

@Entity('api')
class Api extends BaseEntity {
  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  port: number;

  @Column()
  protocol: string;

  @OneToMany(() => Folder, (folder) => folder.api, {
    cascade: true,
  })
  folders: Folder[];

  get url() {
    return `${this.protocol}://${this.host}:${this.port}`;
  }

  static fromCreateApi(createApi: CreateApi) {
    const api = new Api();
    api.name = createApi.name;
    api.host = createApi.host;
    api.port = createApi.port;
    api.protocol = createApi.protocol;
    return api;
  }
}

export default Api;
