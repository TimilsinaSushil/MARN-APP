import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./models/typeDefs.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers }); // typeDefs are graphql schemas / resolver is like implementation of that schema

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.info(`🚀 Server ready at ${url}`);
