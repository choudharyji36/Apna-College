import React, { useState } from "react";
import AddButtonForm from "./AddButtonForm";
import EditableText from "./EditableText";

const HeroSection = () => {
  const [buttons, setButtons] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddButton = (btnData) => {
    setButtons([...buttons, btnData]);
    setShowForm(false);
  };

  return (
    <div className="hero-section">
      <EditableText
        component="HeroSection"
        field="heading"
        initialValue="Welcome to Our Resort"
      />

      <div className="cta-buttons">
        {buttons.map((btn, index) => (
          <a key={index} href={btn.url} className="cta-btn">
            {btn.text}
          </a>
        ))}
      </div>

      {showForm ? (
        <AddButtonForm onSubmit={handleAddButton} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)} className="add-btn">
          + Add Button
        </button>
      )}
    </div>
  );
};

export default HeroSection;
