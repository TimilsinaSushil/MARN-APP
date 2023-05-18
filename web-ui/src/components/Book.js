import { useMutation } from "@apollo/client";
import {
  DELETE_BOOK_MUTATION,
  BOOKS_QUERY,
  EDIT_BOOK_MUTATION,
} from "../graphql";
import { useState } from "react";

export default function Book({ book }) {
  const [deleteBookMutation] = useMutation(DELETE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  const [editBookMutation] = useMutation(EDIT_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });
  const deleteBook = () => {
    deleteBookMutation({
      variables: {
        id: book.id,
      },
    });
  };

  const [isEditing, setisEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [year, setYear] = useState(book.year);
  const saveChanges = () => {
    console.info("updating book...", title, year);
    editBookMutation({
      variables: {
        editId: book.id,
        title: title,
        year: +year,
      },
    });
    setisEditing(false);
  };

  const discardChanges = () => {
    setisEditing(false);
    setTitle(book.title);
    setYear(book.year);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          book.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        ) : (
          book.year
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="btn btn-success mr-2" onClick={saveChanges}>
              Save
            </button>
            <button className="btn btn-success mr-2" onClick={discardChanges}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-info mr-2"
              onClick={() => setisEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={deleteBook}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
