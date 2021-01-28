"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'pds',
    connector: 'postgresql',
    url: '',
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'pass',
    database: 'testdb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PdsDataSource = class PdsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
PdsDataSource.dataSourceName = 'pds';
PdsDataSource.defaultConfig = config;
PdsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.pds', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PdsDataSource);
exports.PdsDataSource = PdsDataSource;
//# sourceMappingURL=pds.datasource.js.map