import { Column, Entity } from 'typeorm';

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
}

export default Api;
