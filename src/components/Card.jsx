export default function Card({ villager }) {
  const name = villager.name["name-USen"];

  return (
    <div className={`h-[275px] w-[250px] rounded-lg border-2 border-black p-2`}>
      <img src={villager.image_uri} className="rounded-lg" />
      <p>{name}</p>
    </div>
  );
}
