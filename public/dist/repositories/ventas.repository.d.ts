import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ventas, VentasRelations } from '../models';
export declare class VentasRepository extends DefaultCrudRepository<Ventas, typeof Ventas.prototype._id, VentasRelations> {
    constructor(dataSource: MongoDataSource);
}
