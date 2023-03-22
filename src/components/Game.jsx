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
    <div className="mx-auto max-w-screen-2xl flex-1">
      <div className="mb-4 flex flex-col items-center">
        <p>
          Earn points by clicking on a character, but don't click on any more
          than once!
        </p>
        <div className="flex gap-6">
          <p>
            <span className="font-bold text-green-700">Current Score: </span>
            {score}
          </p>
          <p>
            <span className="font-bold text-green-700">Best Score: </span>
            {maxScore}
          </p>
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
