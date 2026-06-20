import { useState } from "react";

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    // Toggle: whatever it currently is, switch to the opposite
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">
        {isFlipped ? (
          <p className="card-text">{answer}</p>
        ) : (
          <p className="card-text">{question}</p>
        )}
      </div>
      <p className="flip-hint">(click to flip)</p>
    </div>
  );
}

export default Flashcard;
