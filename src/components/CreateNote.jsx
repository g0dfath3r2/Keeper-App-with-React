import React, { useState } from "react";

function CreateNote(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function onSubmitNote(event) {
    props.onAdd(inputText);
    setInputText({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          placeholder="This is the title"
          value={inputText.title}
          onChange={handleChange}
        ></input>
        <textarea
          name="content"
          type="text"
          placeholder="This is the content"
          rows="3"
          value={inputText.content}
          onChange={handleChange}
        />
        <button onClick={onSubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
