import { DefaultCrudRepository } from '@loopback/repository';
import { PdsDataSource } from '../datasources';
import { Todo, TodoRelations } from '../models';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: PdsDataSource);
}
