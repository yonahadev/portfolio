import BackGroundAnimation from "@/components/BackGroundAnimation";
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
import { BiLogoReact } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBulb } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="w-full h-[calc(100%-4rem)] flex flex-col justify-center items-center section-marker"
      >
        <BackGroundAnimation />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl sm:w-3/5 w-5/6 relative z-10">
          Hi, I'm Thomas.
        </h1>
        <h2 className="scroll-m-20  sm:text-3xl font-semibold tracking-tight transition-colors mt-2 first:mt-0 sm:w-3/5 w-5/6 text-2xl relative z-10">
          I'm a freelance web developer from the United Kingdom focusing on
          delivering interactive user interfaces.
        </h2>
        <div className="sm:w-3/5 w-5/6 mt-2 relative z-10">
          <Link
            href={"#about"}
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
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight absolute bottom-10 flex flex-col items-center justify-center z-10">
          Learn more
          <Link href="#about">
            <ChevronDownIcon className="animate-bounce w-6 h-6" />
          </Link>
        </div>
      </main>
      <section className="grid sm:grid-cols-[20%,80%]">
        <ScrollNavbar />
        <section
          id="about"
          className="w-full sm:h-[80svh] flex justify-center items-center flex-col  sm:grid sm:grid-cols-2 sm:grid-rows-[10%,30%,30%,30%] section-marker"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-2 col-span-2 mt-10 sm:justify-self-start justify-self-center">
            About me
          </h1>
          <div className="col-span-2 h-full flex justify-start items-center">
            <div className="w-1/6 h-1/2 flex justify-center items-center">
              <TbBulb size={120} className="text-yellow-300 " />
            </div>
            <span className="w-3/5 pl-2 border-l">
              <h4 className="scroll-m-20 sm:text-3xl font-semibold tracking-tight">
                Turning ideas into interactivity
              </h4>
              <p className="leading-7 sm:text-xl text-sm">
                I'm a passionate web developer looking to turn your ideas into
                solutions and solve real world problems through the power of
                code.
              </p>
            </span>
          </div>
          <div className="ml-40 col-span-2 h-full flex justify-start items-center">
            <div className="w-1/6 h-1/2 flex justify-center items-center">
              <MdOutlineDesignServices size={120} className="text-blue-800" />
            </div>
            <span className="w-3/5 pl-2 border-l">
              <h4 className="scroll-m-20 sm:text-3xl font-semibold tracking-tight">
                Utilising modern design principles
              </h4>
              <p className="leading-7 sm:text-xl text-sm">
                I work with modern technologies in an ever developing industry
                and consider design principles old and new to deliver effective
                user interfaces and finalised products.
              </p>
            </span>
          </div>
          <div className="col-span-2 h-full flex justify-start items-center">
            <div className="w-1/6 h-3/5 flex justify-center items-center">
              <BiLogoReact size={120} className="text-cyan-400 " />
            </div>
            <span className="w-3/5 pl-2 border-l">
              <h4 className="scroll-m-20 sm:text-3xl font-semibold tracking-tight">
                Using industry standard technologies
              </h4>
              <p className="leading-7 sm:text-xl text-sm">
                I use my skills in Javascript & Typescript to code React and
                NextJS applications built from the ground up for optimal
                performance. Styling with Tailwind CSS and knowledge of Python
                will help me to suit any need.
              </p>
            </span>
          </div>
        </section>
        <section
          id="skills"
          className="w-full sm:h-screen flex justify-center items-center flex-col  sm:grid sm:grid-cols-2 sm:grid-rows-[15%,85%] section-marker"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-2 col-span-2 mt-10 sm:justify-self-start justify-self-center">
            My Skills
          </h1>
          <div className="relative w-3/4 h-[70vw] sm:h-5/6 justify-self-center self-center my-10">
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
          <ul className="border-l pl-10 sm:justify-self-start w-4/5 space-y-8 sm:space-y-16 list-disc sm:self-center my-10 justify-self-center">
            <li>
              <h4 className="scroll-m-20 sm:text-2xl font-semibold tracking-tight">
                User Interfaces
              </h4>
              <p className="leading-7 sm:text-lg text-sm">
                Interactive and modern user interfaces to help you connect with
                your users. Custom graphics and photos are available.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 sm:text-2xl font-semibold tracking-tight">
                Search Engine Optimisation
              </h4>
              <p className="leading-7 sm:text-lg text-sm">
                Websites built to rank highly in search engines so you can reach
                as many people as possible. Configured from the ground up with
                modern technologies.
              </p>
            </li>
            <li>
              {" "}
              <h4 className="scroll-m-20 sm:text-2xl font-semibold tracking-tight">
                Quality control
              </h4>
              <p className="leading-7 sm:text-lg text-sm">
                Putting great ideas into even greater implementations. I work
                closely with clients to ensure the highest level of quality to
                suit your needs.
              </p>
            </li>
          </ul>
        </section>
        <section
          id="projects"
          className="w-full  grid grid-cols-2 section-marker"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-2 col-span-2 mt-10 sm:justify-self-start justify-self-center">
            My Projects
          </h1>
        </section>
      </section>
    </>
  );
}
