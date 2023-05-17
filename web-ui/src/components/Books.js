import { gql, useQuery } from "@apollo/client";
import Book from "./Book";

const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      id
      title
      year
    }
  }
`;

export default function Books() {
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  if (error) {
    console.error("BOOKS_QUERY error", error);
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading.....</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Check console logs for error</td>
            </tr>
          )}
          {!loading &&
            !error &&
            data?.books.map((book) => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}
