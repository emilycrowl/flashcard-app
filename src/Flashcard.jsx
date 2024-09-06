import React from 'react';

function Flashcard({ card, showAnswer, flipCard }) {
  const getCardStyle = () => {
    return {
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      color: "black" 
    };
  };

  const getBackgroundColor = () => {
    switch (card.category) {
      case "Easy":
        return "#d4edda";
      case "Medium":
        return "#fff3cd";
      case "Hard":
        return "#f8d7da";
      case "Opossums":
        return "#cce5ff";
      case "Dachshunds":
        return "#e2e3e5";
      default:
        return "#f8f9fa";
    }
  };

  const getBorderColor = () => {
    switch (card.category) {
      case "Easy":
        return "#28a745";
      case "Medium":
        return "#ffc107";
      case "Hard":
        return "#dc3545";
      case "Opossums":
        return "#007bff";
      case "Dachshunds":
        return "#6c757d";
      default:
        return "#ced4da";
    }
  };

  return (
    <div className="flashcard" style={getCardStyle()} onClick={flipCard}>
      {showAnswer ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;
