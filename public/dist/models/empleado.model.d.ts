import { Entity } from '@loopback/repository';
export declare class Empleado extends Entity {
    nombre: string;
    apellido: string;
    numeroDocumento: string;
    _id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Empleado>);
}
export interface EmpleadoRelations {
}
export declare type EmpleadoWithRelations = Empleado & EmpleadoRelations;
