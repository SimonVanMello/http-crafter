import { Column, Entity } from 'typeorm';

import CreateApi from '@app/features/apis/models/CreateApi.model';

import Base from './Base.entity';

@Entity('api')
class Api extends Base {
  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  port: number;

  @Column()
  protocol: string;

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
