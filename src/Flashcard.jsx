import { useState } from "react";

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null);

  function handleCardClick() {
    setIsFlipped(!isFlipped);
  }

  function handleGuessChange(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isCorrect = guess.trim().toLowerCase() === answer.trim().toLowerCase();

    setFeedback(isCorrect ? "correct" : "incorrect");
    setIsFlipped(true);
  }

  return (
    <div>
      <div className="card" onClick={handleCardClick}>
        <div className="card-content">
          {isFlipped ? (
            <p className="card-text">{answer}</p>
          ) : (
            <p className="card-text">{question}</p>
          )}
        </div>
        <p className="flip-hint">(click to flip)</p>
      </div>

      <form className="guess-form" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <label htmlFor="guess-input">Your guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Type your answer..."
        />
        <button type="submit">Submit</button>
      </form>

      {feedback === "correct" && (
        <p className="feedback correct">Correct! 🎉</p>
      )}
      {feedback === "incorrect" && (
        <p className="feedback incorrect">Not quite. Try the next one!</p>
      )}
    </div>
  );
}

export default Flashcard;