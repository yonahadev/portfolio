import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const navbar = () => {
  return (
    <nav
      id="navbar-top"
      className="relative z-10 h-16 w-full border-b pb-2 flex justify-between items-center "
    >
      <Link href={"/"} className="text-lg font-semibold ml-8 border-x px-2">
        <h1>yonahadev</h1>
      </Link>
      <span className="flex items-center justify-center">
        <ThemeToggle />
        <Button className=" font-semibold mr-8 ">Contact</Button>
      </span>
    </nav>
  );
};

export default navbar;
