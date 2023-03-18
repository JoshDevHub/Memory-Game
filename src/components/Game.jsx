import { useState } from "react";
import uniqid from "uniqid";

import Card from "./Card";

const MakeCard = () => {
  const id = uniqid();

  return {
    id,
    text: `placeholder ${id}`,
  };
};

const initialState = Array.from({ length: 12 }, () => MakeCard());

export default function Game() {
  const [score] = useState(0);
  const [cards] = useState(initialState);

  const randomOrder = () => {
    return cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
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
      <div className="flex flex-wrap gap-4">
        {randomOrder().map((card) => {
          return <Card key={card.id} text={card.text} />;
        })}
      </div>
    </div>
  );
}
