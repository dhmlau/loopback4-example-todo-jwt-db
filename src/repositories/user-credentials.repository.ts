import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PdsDataSource} from '../datasources';
import {UserCredentials, UserCredentialsRelations} from '../models';

export class UserCredentialsRepository extends DefaultCrudRepository<
  UserCredentials,
  typeof UserCredentials.prototype.id,
  UserCredentialsRelations
> {
  constructor(
    @inject('datasources.pds') dataSource: PdsDataSource,
  ) {
    super(UserCredentials, dataSource);
  }
}
