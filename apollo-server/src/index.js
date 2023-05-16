import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import gql from "graphql-tag";

// GraphQL Schema
const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
  },
};

const server = new ApolloServer({ typeDefs, resolvers }); // typeDefs are graphql schemas / resolver is like implementation of that schema

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.info(`🚀 Server ready at ${url}`);
