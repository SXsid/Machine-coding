import React, { useState } from 'react';

interface Card {
  id: number;
  imageUrl: string;
  isClicked: boolean;
  isMatched: boolean;
}

function MemoryGame({ images }: { images: string[] }) {
  const [score, setScore] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false); // Prevent extra clicks
  const [card, setCard] = useState<Card[]>(() => {
    const duplicateImages = [...images, ...images];
    const shuffledImages = shuffleArray(duplicateImages);
    return shuffledImages.map((img, index) => ({
      id: index,
      imageUrl: img,
      isClicked: false,
      isMatched: false,
    }));
  });

  function checkMatch(firstCard: Card, secondCard: Card) {
    const isMatch = firstCard.imageUrl === secondCard.imageUrl;
    setIsProcessing(true); // Disable clicking during processing
    setTimeout(() => {
      setCard((cards) => {
        const newCards = [...cards];
        if (isMatch) {
            console.log("in the matrhc");
            
          newCards[firstCard.id].isMatched = true;
          newCards[secondCard.id].isMatched = true;
          setScore(socre=>socre+1)
        } else {
          newCards[firstCard.id].isClicked = false;
          newCards[secondCard.id].isClicked = false;
        }
        return newCards;
      });
      setIsProcessing(false); // Re-enable clicking after processing
    }, 800);
  }

  function handleClick(id: number) {
    if (isProcessing) return; // Ignore clicks during processing
    setCard((cards) => {
      const updatedCards = cards.map((card) =>
        !card.isClicked && !card.isMatched && card.id === id
          ? { ...card, isClicked: true }
          : card
      );
      const filteredCards = updatedCards.filter((card) => card.isClicked && !card.isMatched);
      if (filteredCards.length === 2) {
        checkMatch(filteredCards[0], filteredCards[1]);
      }
      return updatedCards;
    });
  }

  return (
    <>
    <h1>{score}</h1>
      <h1>{Math.floor((score / 6) * 100)}%</h1>
      <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {card.map((value) => (
          <div
            key={value.id}
            style={{
              width: '300px',
              height: '200px',
              backgroundColor: value.isClicked || value.isMatched ? 'transparent' : 'beige',
              border: '2px solid black',
              cursor: 'pointer',
              transition: 'transform 0.5s',
              transform: value.isClicked || value.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
            onClick={() => handleClick(value.id)}
          >
            {(value.isClicked || value.isMatched) && (
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={value.imageUrl}
                alt="card"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MemoryGame;

function shuffleArray(array: string[]): string[] {
  const shuffled = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
