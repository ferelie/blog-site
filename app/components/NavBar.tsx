import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <nav className="py-5 w-full relative flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Abooz<span className="text-primary">Blog!</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
