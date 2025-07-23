import React, { useState } from "react";

const EditableText = ({ component, field, initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    fetch("http://localhost:5000/update-section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ component, field, value }),
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error("API Error:", err));

    setIsEditing(false);
  };

  return (
    <div className="editable-text">
      {isEditing ? (
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{value}</h1>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditableText;
