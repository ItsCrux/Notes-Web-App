import React, { useState } from "react";

function CreateArea(props) {
  const [note, createNote] = useState({});
  function handleChange(e) {
    const { value, name } = e.target;
    createNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onAdd(note, e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
