import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className="w-full h-[calc(100%-4rem)] flex flex-col justify-center items-center backdrop-blur-md bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/ONEMNy6.png')",
        }}
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:w-3/5 w-5/6 ">
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
      <section className="w-full h-full flex flex-col items-center">
        <h1 className="mt-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl px-2 border-x">
          My Skills
        </h1>
        <div className="grid grid-cols-2 w-full h-full items-center align-middle ">
          <div className="relative w-1/2 h-5/6 justify-self-end mr-10">
            <Image
              src={"https://i.imgur.com/3wd5UNz.png"}
              alt="graphic"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-xl"
            />
          </div>

          <ul className="justify-self-start ml-10 w-3/4 space-y-16 list-disc">
            <li>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                User Interfaces
              </h4>
              <p className="leading-7">
                Interactive and modern user interfaces to help you connect with
                your users. Custom graphics and photos are available.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Search Engine Optimisation
              </h4>
              <p className="leading-7">
                Websites built to rank highly in search engines so you can reach
                as many people as possible. Configured from the ground up with
                modern technologies.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Quality control
              </h4>
              <p className="leading-7">
                Putting great ideas into even greater implementations. I work
                closely with clients to ensure the highest level of quality to
                suit your needs.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
