import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
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
  function handleExpand()
  {
   setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea
        onClick={handleExpand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={(e) => {
            props.onAdd(note, e);
            setNote({title:"",content:""});
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
