import fastify, { FastifyInstance } from "fastify";
import { renderGraphiQL } from "graphql-helix";
import { Handler } from "./lib";

export class JenovaServer {
  app: FastifyInstance;

  constructor(options: any) {
    const handler = Handler(options);

    this.app = fastify();
    this.app.route({
      method: "GET",
      url: "/graphql",
      handler: (_req, res) => {
        res.type('text/html');
        res.send(renderGraphiQL({}));
      },
    });
    this.app.route({ method: "POST", url: "/graphql", handler });
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Jenova GraphQL Server is listening on port ${port}.`);
    });
  }
}
