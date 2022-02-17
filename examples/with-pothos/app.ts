
import { JenovaServer } from "jenova-graphql";
import SchemaBuilder from '@pothos/core';

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (_parent, { name }) => { 
        console.log("cache?")
        return `hello, ${name || 'World'}`;
      }
    }),
  }),
});

const main = () => {
  new JenovaServer({
    schema: builder.toSchema({}),
    isProduction: true 
  }).listen(5000);
}

main()