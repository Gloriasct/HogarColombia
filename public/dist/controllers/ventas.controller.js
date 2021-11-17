"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
// ------------------------------------
let VentasController = class VentasController {
    constructor(ventasRepository) {
        this.ventasRepository = ventasRepository;
    }
    async create(ventas) {
        return this.ventasRepository.create(ventas);
    }
    async count(where) {
        return this.ventasRepository.count(where);
    }
    async find(filter) {
        return this.ventasRepository.find(filter);
    }
    async updateAll(ventas, where) {
        return this.ventasRepository.updateAll(ventas, where);
    }
    async findById(id, filter) {
        return this.ventasRepository.findById(id, filter);
    }
    async updateById(id, ventas) {
        await this.ventasRepository.updateById(id, ventas);
    }
    async replaceById(id, ventas) {
        await this.ventasRepository.replaceById(id, ventas);
    }
    async deleteById(id) {
        await this.ventasRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Ventas model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ventas) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ventas, {
                    title: 'NewVentas',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/count'),
    (0, rest_1.response)(200, {
        description: 'Ventas model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Ventas)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Array of Ventas model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ventas, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Ventas)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/ventas'),
    (0, rest_1.response)(200, {
        description: 'Ventas PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ventas, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Ventas)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Ventas, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Ventas model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ventas, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Ventas, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ventas PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ventas, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Ventas]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ventas PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Ventas]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/ventas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ventas DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentasController.prototype, "deleteById", null);
VentasController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt') // <---- Apply the @authenticate decorator at the class level
    ,
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VentasRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VentasRepository])
], VentasController);
exports.VentasController = VentasController;
//# sourceMappingURL=ventas.controller.js.map