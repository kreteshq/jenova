/// <reference types="node" />
import { RouteHandlerMethod } from "fastify";
import { GraphQLSchema } from "graphql";
interface Options {
    schema: GraphQLSchema;
    isProduction: boolean;
}
export declare const Handler: ({ schema, isProduction }: Options) => RouteHandlerMethod<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
export {};
