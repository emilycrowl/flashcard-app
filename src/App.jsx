import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

const flashcards = [
  { question: "What is the primary diet of opossums?", answer: "omnivores", category: "Easy" },
  { question: "How many species of opossums are there?", answer: "100", category: "Medium"},
  { question: "What unique defense mechanism do opossums have?", answer: "play dead", category: "Easy" },
  { question: "Where are opossums primarily found?", answer: "America", category: "Easy" },
  { question: "How long is the gestation period for opossums?", answer: "12-13 days", category: "Hard" },
  { question: "What is a baby opossum called?", answer: "joey", category: "Easy" },
  { question: "How many teeth do opossums have?", answer: "50", category: "Medium" },
  { question: "How do opossums help control pests?", answer: "eat ticks", category: "Medium" },
  { question: "What is the average lifespan of an opossum in the wild?", answer: "2-4 years", category: "Easy" },
  { question: "Can opossums hang by their tails?", answer: "yes", category: "Medium" },
  { question: "What is the original purpose of dachshunds?", answer: "hunt badgers", category: "Easy" },
  { question: "What are the three coat types of dachshunds?", answer: "smooth, long, and wire-hair", category: "Medium" },
  { question: "What does the word 'dachshund' mean in German?", answer: "badger dog", category: "Hard" },
  { question: "What is the average lifespan of a dachshund?", answer: "12-16 years", category: "Easy" },
  { question: "What are the two sizes of dachshunds?", answer: "standard and miniature", category: "Easy" },
  { question: "What is a common nickname for dachshunds?", answer: "wiener dogs", category: "Easy" },
  { question: "What health issue are dachshunds prone to?", answer: "IVDD", category: "Medium" },
  { question: "How do dachshunds use their tails while hunting?", answer: "pull them out of burrows", category: "Hard" },
  { question: "What is the temperament of a dachshund?", answer: "curious, brave, and stubborn", category: "Medium" },
  { question: "What is the historical significance of dachshunds during WWII?", answer: "less popular in the US", category: "Hard" }

];
  
function FlashcardApp() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // null means not answered, true means correct, false means incorrect

  const currentCard = flashcards[currentCardIndex];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    setIsCorrect(userInput.trim().toLowerCase() === currentCard.answer.toLowerCase());
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    resetInput();
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    resetInput();
  };

  const resetInput = () => {
    setUserInput("");
    setIsCorrect(null);
  };

  return (
    <div>
      <h1>Flashcard App</h1>
          <p>Description: Learn facts about opossums and dachshunds!</p>
          <p>Total Cards: {flashcards.length}</p>
      <Flashcard card={currentCard} showAnswer={isCorrect === true} flipCard={handleSubmit} />

      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      <button onClick={handleSubmit}>Submit</button>

      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
      )}

      <button onClick={goToPreviousCard}>Back</button>
      <button onClick={goToNextCard}>Next</button>
    </div>
  );
}

// //function App() {
// const flashcards = [
//   { question: "What is the primary diet of opossums?", answer: "Opossums are omnivores and eat fruits, insects, and small animals.", category: "Opossums" },
//   { question: "How many species of opossums are there?", answer: "There are more than 100 species of opossums.", category: "Opossums"},
//   { question: "What unique defense mechanism do opossums have?", answer: "Opossums play dead or 'play possum' when threatened.", category: "Opossums" },
//   { question: "Where are opossums primarily found?", answer: "Opossums are mainly found in North and South America.", category: "Opossums" },
//   { question: "How long is the gestation period for opossums?", answer: "The gestation period for opossums is about 12-13 days.", category: "Opossums" },
//   { question: "What is a baby opossum called?", answer: "A baby opossum is called a joey." },
//   { question: "How many teeth do opossums have?", answer: "Opossums have 50 teeth, more than any other North American mammal.", category: "Opossums" },
//   { question: "How do opossums help control pests?", answer: "Opossums eat ticks, helping to reduce the spread of Lyme disease.", category: "Opossums" },
//   { question: "What is the average lifespan of an opossum in the wild?", answer: "Opossums typically live 2-4 years in the wild.", category: "Opossums" },
//   { question: "Can opossums hang by their tails?", answer: "Young opossums can briefly hang by their tails, but adults use their tails for balance, not hanging.", category: "Opossums" },
//   { question: "What is the original purpose of dachshunds?", answer: "Dachshunds were originally bred to hunt badgers.", category: "Dachshunds" },
//   { question: "What are the three coat types of dachshunds?", answer: "Dachshunds have smooth, long, and wire-haired coats.", category: "Dachshunds" },
//   { question: "What does the word 'dachshund' mean in German?", answer: "The word 'dachshund' means 'badger dog' in German.", category: "Dachshunds" },
//   { question: "What is the average lifespan of a dachshund?", answer: "Dachshunds typically live 12-16 years.", category: "Dachshunds" },
//   { question: "What are the two sizes of dachshunds?", answer: "Dachshunds come in standard and miniature sizes.", category: "Dachshunds" },
//   { question: "What is a common nickname for dachshunds?", answer: "Dachshunds are often called 'wiener dogs' or 'sausage dogs'.", category: "Dachshunds" },
//   { question: "What health issue are dachshunds prone to?", answer: "Dachshunds are prone to back problems, particularly intervertebral disc disease (IVDD).", category: "Dachshunds" },
//   { question: "How do dachshunds use their tails while hunting?", answer: "Dachshunds' tails were bred to be long and sturdy to help pull them out of burrows during hunts.", category: "Dachshunds" },
//   { question: "What is the temperament of a dachshund?", answer: "Dachshunds are known for being curious, brave, and sometimes stubborn.", category: "Dachshunds" },
//   { question: "What is the historical significance of dachshunds during WWII?", answer: "During WWII, dachshunds became less popular in the U.S. due to their association with Germany.", category: "Dachshunds" }

// ];  
// const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [showAnswer, setShowAnswer] = useState(false);

//   // handle flipping the card
//   const flipCard = () => {
//     setShowAnswer(!showAnswer);
//   };

//   // handle showing a random card
//   const showRandomCard = () => {
//     setShowAnswer(false);
//     const randomIndex = Math.floor(Math.random() * flashcards.length);
//     setCurrentCardIndex(randomIndex);
//   };

//   return (
//     <div className="app">
//       <h1>Flashcard App</h1>
//       <p>Description: Learn facts about opossums and dachshunds!</p>
//       <p>Total Cards: {flashcards.length}</p>
//       <Flashcard 
//         card={flashcards[currentCardIndex]} 
//         showAnswer={showAnswer} 
//         flipCard={flipCard} 
//       />
//       <button onClick={showRandomCard}>Next Card</button>
//     </div>
//   );
// }

export default FlashcardApp;
