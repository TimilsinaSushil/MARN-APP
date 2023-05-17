import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation Mutation($title: String, $year: Int) {
    create(title: $title, year: $year) {
      id
      title
      year
    }
  }
`;

export const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      id
      title
      year
    }
  }
`;
