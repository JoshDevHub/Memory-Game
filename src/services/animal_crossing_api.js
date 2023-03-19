const BASE_URL = "https://acnhapi.com/v1/villagers/";
const TOTAL_VILLAGERS = 391;
const TOTAL_GAME_CHARACTERS = 12;

// get 12 random, unique villager numbers
const indexes = new Set();
while (indexes.size < TOTAL_GAME_CHARACTERS) {
  const randomVillagerId = Math.floor(Math.random() * TOTAL_VILLAGERS);
  indexes.add(randomVillagerId);
}

export default async function callVillagerApi() {
  const response = await fetch(BASE_URL, { mode: "cors" });
  const resJSON = await response.json();
  const villagerArray = [...Object.values(resJSON)];
  return [...indexes].map((i) => villagerArray[i]);
}
