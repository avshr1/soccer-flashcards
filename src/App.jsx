import { useState } from "react";
import Flashcard from "./Flashcard";
import cardData from "./cardData";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const currentCard = cardData[currentIndex];
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === cardData.length - 1;

  return (
    <div className="app">
      <h1>Soccer Basics Flashcards</h1>
      <p className="description">
        Test your knowledge of basic soccer rules and terms!
      </p>
      <p className="card-count">
        Card {currentIndex + 1} of {cardData.length}
      </p>

      <Flashcard
        key={currentIndex}
        question={currentCard.question}
        answer={currentCard.answer}
      />

      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          ← Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={isAtEnd}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default App;