import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Empleado, EmpleadoRelations } from '../models';
export declare class EmpleadoRepository extends DefaultCrudRepository<Empleado, typeof Empleado.prototype._id, EmpleadoRelations> {
    constructor(dataSource: MongoDataSource);
}
