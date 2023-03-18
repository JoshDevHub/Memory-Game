export default function Card({ text }) {
  return (
    <div className="h-[100px] w-[100px] border-2 border-black">
      <p>{text}</p>
    </div>
  );
}
