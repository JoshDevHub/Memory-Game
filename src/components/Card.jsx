export default function Card({ villager, handler }) {
  const name = villager.name["name-USen"];

  return (
    <div
      className="h-[275px] w-[250px] cursor-pointer rounded-lg border-2 border-black p-2"
      onClick={handler}
    >
      <img src={villager.image_uri} className="rounded-lg" />
      <p>{name}</p>
    </div>
  );
}
