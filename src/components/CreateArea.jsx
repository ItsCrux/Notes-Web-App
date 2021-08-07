import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(e) => {
            props.onAdd(note, e);
            setNote({title:"",content:""});
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
