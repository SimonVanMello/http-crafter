import 'reflect-metadata';

import { DataSource } from 'typeorm';

import Api from './entities/Api.entity';

const context = new DataSource({
  type: 'react-native',
  database: 'test',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  synchronize: true,
  entities: [Api],
});

context
  .initialize()
  .then(async () => {
    console.log('Connection initialized with database...');
  })
  .catch((error) => console.log(error));

export default context;
