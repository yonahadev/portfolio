import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <main className="w-full h-[calc(100%-4rem)] flex flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:w-3/5 w-5/6  ">
          Hi, I'm Thomas.
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 sm:text-3xl font-semibold tracking-tight transition-colors mt-2 first:mt-0 sm:w-3/5 w-5/6 text-xl">
          I'm a freelance web developer from the United Kingdom focusing on
          delivering interactive user interfaces.
        </h2>
        <div className="sm:w-3/5 w-5/6 mt-2">
          <Button variant={"outline"} className="mr-2">
            Learn More
          </Button>
          <Button>Contact me</Button>
        </div>
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight absolute bottom-10 flex flex-col items-center justify-center">
          Learn more
          <ChevronDownIcon className="animate-bounce w-6 h-6" />
        </div>
      </main>
      <section className="w-full h-full"></section>
    </>
  );
}
