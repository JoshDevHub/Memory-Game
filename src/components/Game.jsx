import { useState, useEffect } from "react";
import callVillagerApi from "../services/animal_crossing_api";

import Card from "./Card";

export default function Game() {
  const [score] = useState(0);
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
    callVillagerApi().then((result) => setCards(result));
  }, []);

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
        <p>Score: {score}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards &&
          randomOrder().map((card) => {
            return <Card key={card.id} villager={card} />;
          })}
      </div>
    </div>
  );
}
