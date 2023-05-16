import { gql } from "graphql-tag";

// GraphQL Schema
export const typeDefs = gql`
  type Query {
    hello(name: String): String
    books: [Book]
  }
  type Book {
    id:ID,
    title: String,
    year: Int
  }
`;