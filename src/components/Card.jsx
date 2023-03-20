export default function Card({ villager, handler }) {
  const name = villager.name["name-USen"];

  return (
    <div
      className="h-[280px] w-[250px] cursor-pointer rounded-lg border
                 border-neutral-200 p-1 pb-6 text-neutral-800 shadow-xl
                 transition-all hover:text-green-700 hover:shadow-md
                 hover:shadow-green-700"
      onClick={handler}
    >
      <img src={villager.image_uri} className="rounded-t-lg" />
      <p className="text-center text-xl font-bold">{name}</p>
    </div>
  );
}
