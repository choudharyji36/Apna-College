import React, { useState } from "react";

const AddButtonForm = ({ onSubmit, onCancel }) => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !url) return;
    onSubmit({ text, url });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Button Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Button URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default AddButtonForm;
