import 'reflect-metadata';

import { DataSource } from 'typeorm';

import Api from './entities/Api.entity';
import Folder from './entities/Folder.entity';

const context = new DataSource({
  type: 'react-native',
  database: 'default',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  synchronize: true,
  entities: [Api, Folder],
});

context
  .initialize()
  .then(async () => {
    console.log('Connection initialized with database...');
  })
  .catch((error) => console.log(error));

export default context;
