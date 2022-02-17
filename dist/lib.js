"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
const graphql_helix_1 = require("graphql-helix");
const core_1 = require("@envelop/core");
const response_cache_1 = require("@envelop/response-cache");
const Handler = ({ schema, isProduction }) => {
    const plugins = [
        core_1.useSchema(schema),
        response_cache_1.useResponseCache(),
        ...(isProduction
            ? []
            : [core_1.useLogger(), core_1.useTiming(), core_1.useImmediateIntrospection()]),
    ];
    const getEnveloped = core_1.envelop({ plugins });
    const handler = async (req, res) => {
        const { parse, validate, contextFactory, execute, schema } = getEnveloped({
            req,
        });
        const request = {
            body: req.body,
            headers: req.headers,
            method: req.method,
            query: req.query,
        };
        const { operationName, query, variables } = graphql_helix_1.getGraphQLParameters(request);
        const result = await graphql_helix_1.processRequest({
            operationName,
            query,
            variables,
            request,
            schema,
            parse,
            validate,
            execute,
            contextFactory,
        });
        graphql_helix_1.sendResult(result, res.raw);
        res.sent = true;
    };
    return handler;
};
exports.Handler = Handler;
