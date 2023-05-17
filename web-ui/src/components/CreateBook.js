import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOOK_MUTATION, BOOKS_QUERY } from "../graphql";

export default function CreateBook() {
  const [createMutation] = useMutation(CREATE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const handelSubmit = (evt) => {
    evt.preventDefault();
    console.info("Creating book", title, year);

    createMutation({
      variables: {
        title,
        year: +year,
      },
    });

    alert(`Book ${title} (${year}) created!`);
    setTitle("");
    setYear("");
  };
  return (
    <form onSubmit={(event) => handelSubmit(event)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          className="form-control"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>

      <input type="submit" value="Create" className="btn btn-primary" />
    </form>
  );
}
