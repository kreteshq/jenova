# `jenova` 

> **Battery-included GraphQL Server in TypeScript**

Jenova is built on top of GraphQL Helix and Envelop. The goal is to provde an easy to easy, battery-included GraphQL server for TypeScript.

## Install

```
npm i jenova-graphql
```

## Usage


```ts
import { JenovaServer } from "jenova-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'World',
    },
  },
});

new JenovaServer({ schema }).listen(5000);
```

