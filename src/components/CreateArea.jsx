import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(item);
    event.preventDefault();
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={item.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={item.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
