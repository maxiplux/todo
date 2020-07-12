import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoSe',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'mongo',
  password: 'mongo',
  database: 'admin',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoSeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoSe';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoSe', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
