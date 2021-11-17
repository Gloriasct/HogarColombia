import { Entity } from '@loopback/repository';
export declare class Ventas extends Entity {
    codigo: number;
    descripcion: string;
    cantidad: number;
    valor: number;
    nuemroVenta: number;
    _id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Ventas>);
}
export interface VentasRelations {
}
export declare type VentasWithRelations = Ventas & VentasRelations;
