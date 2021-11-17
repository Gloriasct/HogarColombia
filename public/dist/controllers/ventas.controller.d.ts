import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ventas } from '../models';
import { VentasRepository } from '../repositories';
export declare class VentasController {
    ventasRepository: VentasRepository;
    constructor(ventasRepository: VentasRepository);
    create(ventas: Omit<Ventas, '_id'>): Promise<Ventas>;
    count(where?: Where<Ventas>): Promise<Count>;
    find(filter?: Filter<Ventas>): Promise<Ventas[]>;
    updateAll(ventas: Ventas, where?: Where<Ventas>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Ventas>): Promise<Ventas>;
    updateById(id: string, ventas: Ventas): Promise<void>;
    replaceById(id: string, ventas: Ventas): Promise<void>;
    deleteById(id: string): Promise<void>;
}
