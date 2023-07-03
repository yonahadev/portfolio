import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const navbar = () => {
  return (
    <nav className="h-16 w-full border-b pb-2 flex justify-between items-center">
      <div className="text-lg font-semibold ml-4">yonahadev</div>
      <Button className="mr-4">
        <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> Contact me
      </Button>
    </nav>
  );
};

export default navbar;
