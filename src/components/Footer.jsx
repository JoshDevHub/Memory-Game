import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center p-4">
      <a
        href="https://github.com/JoshDevHub/Memory-Game"
        target="_blank"
        className="rounded-md p-2 transition-all hover:bg-green-700"
      >
        <GitHubIcon className="h-6 w-6" />
      </a>
    </footer>
  );
}
