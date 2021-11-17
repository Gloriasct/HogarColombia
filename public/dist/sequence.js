"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
// ---------- ADD IMPORTS -------------
const rest_1 = require("@loopback/rest");
// ------------------------------------
let MySequence = class MySequence {
    constructor(
    // ---- ADD THIS LINE ------
    findRoute, parseParams, invoke, send, reject, authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            // - enable jwt auth -
            // call authentication action
            // ---------- ADD THIS LINE -------------
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            // ---------- ADD THIS SNIPPET -------------
            // if error is coming from the JWT authentication extension
            // make the statusCode 401
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            // ---------- END OF SNIPPET -------------
            this.reject(context, err);
        }
    }
};
MySequence = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)(rest_1.SequenceActions.FIND_ROUTE)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(rest_1.SequenceActions.PARSE_PARAMS)),
    (0, tslib_1.__param)(2, (0, core_1.inject)(rest_1.SequenceActions.INVOKE_METHOD)),
    (0, tslib_1.__param)(3, (0, core_1.inject)(rest_1.SequenceActions.SEND)),
    (0, tslib_1.__param)(4, (0, core_1.inject)(rest_1.SequenceActions.REJECT)),
    (0, tslib_1.__param)(5, (0, core_1.inject)(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    (0, tslib_1.__metadata)("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map