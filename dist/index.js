"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JenovaServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const graphql_helix_1 = require("graphql-helix");
const lib_1 = require("./lib");
class JenovaServer {
    constructor(options) {
        const handler = lib_1.Handler(options);
        this.app = fastify_1.default();
        this.app.route({
            method: "GET",
            url: "/graphql",
            handler: (_req, res) => {
                res.type('text/html');
                res.send(graphql_helix_1.renderGraphiQL({}));
            },
        });
        this.app.route({ method: "POST", url: "/graphql", handler });
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Jenova GraphQL Server is listening on port ${port}.`);
        });
    }
}
exports.JenovaServer = JenovaServer;
