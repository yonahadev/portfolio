import ScrollNavbar from "@/components/scrollNavbar";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main
        className="w-full h-[calc(100%-4rem)] flex flex-col justify-center items-center backdrop-blur-md bg-cover bg-center section-marker"
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
          <Link
            href={"#skills"}
            className={`${buttonVariants({ variant: "outline" })} mr-2`}
          >
            Learn More
          </Link>
          <Link
            className={buttonVariants({ variant: "default" })}
            href={"/contact"}
          >
            Contact me
          </Link>
        </div>
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight absolute bottom-10 flex flex-col items-center justify-center">
          Learn more
          <ChevronDownIcon href="#skills" className="animate-bounce w-6 h-6" />
        </div>
      </main>
      <section className="grid grid-cols-[20%,80%]">
        <ScrollNavbar />
        <section
          id="skills"
          className="w-full h-screen grid grid-cols-2 grid-rows-[15%,85%] section-marker"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-2 col-span-2 mt-10">
            My Skills
          </h1>
          <div className="relative w-3/4 h-5/6 justify-self-center self-center my-10">
            <Image
              src={"https://i.imgur.com/3wd5UNz.png"}
              alt="graphic"
              fill
              sizes="50vw"
              priority
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-xl"
            />
          </div>
          <ul className="border-l pl-10 justify-self-start w-4/5 space-y-16 list-disc self-center my-10">
            <li>
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                User Interfaces
              </h4>
              <p className="leading-7 ">
                Interactive and modern user interfaces to help you connect with
                your users. Custom graphics and photos are available.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Search Engine Optimisation
              </h4>
              <p className="leading-7 ">
                Websites built to rank highly in search engines so you can reach
                as many people as possible. Configured from the ground up with
                modern technologies.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Quality control
              </h4>
              <p className="leading-7 ">
                Putting great ideas into even greater implementations. I work
                closely with clients to ensure the highest level of quality to
                suit your needs.
              </p>
            </li>
          </ul>
        </section>
        <section
          id="projects"
          className="w-full h-screen grid grid-cols-2 section-marker"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-2 col-span-2 ">
            My Projects
          </h1>
          <div className="h-full w-full">Content</div>
          <div className="w-full h-full">More content</div>
        </section>
      </section>
    </>
  );
}
