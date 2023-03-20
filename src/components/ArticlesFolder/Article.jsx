import React, { useState } from 'react';

export const Article = ({ date, previewImage, heading, content }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <img src={previewImage} alt={heading} />
      <h2>{heading}</h2>
      <p>{date}</p>
      <button onClick={toggleContent}>
        {showContent ? 'Сховати статтю' : 'Відкрити статтю'}
      </button>
      {showContent && <p>{content}</p>}
    </div>
  );
};
