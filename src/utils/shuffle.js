/*
ALGORITHM: Shuffle an Array (Fisher-Yates)

1. START at the very last card in the deck (index i = length - 1).
2. WHILE we haven't reached the first card (i > 0):
   a. PICK a random "mystery card" from the cards we haven't locked yet.
      (This is a random index 'j' between 0 and 'i').
   b. SWAP the current card at 'i' with the mystery card at 'j'.
   c. LOCK the card at 'i'. It is now in its final random position.
   d. MOVE one step to the left (i = i - 1).
3. REPEAT until every card has been swapped.
4. RETURN the shuffled deck.
*/

export const shuffleArray = (array) => {
  if (!array || !Array.isArray(array)) return [];

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
