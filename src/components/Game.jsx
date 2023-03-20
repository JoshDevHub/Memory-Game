import { useState, useEffect, useRef } from "react";
import callVillagerApi from "../services/animal_crossing_api";

import Card from "./Card";

export default function Game() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cards, setCards] = useState(undefined);
  const usedCards = useRef(new Set());

  useEffect(() => {
    callVillagerApi().then((result) => setCards(result));
  }, []);

  useEffect(() => {
    setMaxScore(Math.max(score, maxScore));
  }, [score]);

  const addPoint = (id) => {
    return () => {
      if (usedCards.current.has(id)) {
        setScore(0);
        usedCards.current = new Set();
      } else {
        usedCards.current.add(id);
        setScore(score + 1);
      }
    };
  };

  const randomOrder = () => {
    return cards
      .map((value) => ({ value, sortBy: Math.random() }))
      .sort((a, b) => a.sortBy - b.sortBy)
      .map(({ value }) => value);
  };

  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between">
        <p>
          Earn points by clicking on a character, but don't click on any more
          than once!
        </p>
        <div>
          <p>Score: {score}</p>
          <p>Best Score: {maxScore}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards &&
          randomOrder().map((card) => {
            return (
              <Card key={card.id} villager={card} handler={addPoint(card.id)} />
            );
          })}
      </div>
    </div>
  );
}
