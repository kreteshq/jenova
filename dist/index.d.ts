import { FastifyInstance } from "fastify";
export declare class JenovaServer {
    app: FastifyInstance;
    constructor(options: any);
    listen(port: number): void;
}
