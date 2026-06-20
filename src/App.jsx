import { useState } from "react";
import Flashcard from "./Flashcard";
import cardData from "./cardData";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextCard() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentIndex(randomIndex);
  }

  const currentCard = cardData[currentIndex];

  return (
    <div className="app">
      <h1>Soccer Basics Flashcards</h1>
      <p className="description">
        Test your knowledge of basic soccer rules and terms!
      </p>
      <p className="card-count">Total cards: {cardData.length}</p>

      {/* key={currentIndex} forces this Flashcard to reset (unflip)
          every time we move to a new card */}
      <Flashcard
        key={currentIndex}
        question={currentCard.question}
        answer={currentCard.answer}
      />

      <button className="next-button" onClick={handleNextCard}>
        Next Card
      </button>
    </div>
  );
}

export default App;
