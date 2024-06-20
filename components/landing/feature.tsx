"use client";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import DM_Sans from "@/lib/fonts/dm-sans";
import WordRotate from "@/components/magicui/word-rotate";
import DotPattern from "@/components/magicui/dot-pattern";
import Ripple from "@/components/magicui/ripple";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { CalendarIcon, FileIcon, TextCursorInputIcon } from "lucide-react";
import { useEffect } from "react";

const files = [
  {
    name: "How to maintain productivity",
    body: "A guide to maintaining productivity in the workplace.",
  },
  {
    name: "My opinion on the new Tesla Cybertruck",
    body: "A personal opinion on the new Tesla Cybertruck.",
  },
  {
    name: "Mental health in the workplace",
    body: "A guide to maintaining mental health while working.",
  },
  {
    name: "How to learn programming",
    body: "A guide to learning programming from scratch.",
  },
  {
    name: "I think I'm addicted to coffee",
    body: "My story of how I became addicted to coffee.",
  },
];

const features = [
  {
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-10 z-10">
          <div className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black">
            <WordRotate
              className="text-4xl font-medium text-black"
              words={[
                "Sharing Stories",
                "Researching Journal",
                "Writing Thoughts",
                "Giving Opinions",
                "Debating Stuff",
                "Helping Each Other Out",
                "Documenting Tutorials",
                "Presenting Talks",
                "Politics. Religion. Science.",
              ]}
            />
          </div>
        </div>
        <DotPattern
          className={cn(
            "z-9",
            "[mask-image:radial-gradient(440px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
    ),
  },
  {
    Icon: FileIcon,
    name: "Save Locally",
    description:
      "We automatically save your content as you type, or you can save them locally.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },

  {
    Icon: CalendarIcon,
    name: "Scheduled Publishing",
    description: "Schedule your content to be published at a later date.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: TextCursorInputIcon,
    name: "Command Pallete",
    description:
      "Free typing without leaving your keyboard by using our command pallete to format a text, ask AI for help, and more.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_50%,#fff_100%)] group-hover:-translate-x-10">
        <CommandList>
          <CommandGroup heading="Command">
            <CommandItem disabled>Make the text bold</CommandItem>
            <CommandItem disabled>Make the text italic</CommandItem>
            <CommandItem disabled>
              Ask AI to generate a new paragraph
            </CommandItem>
            <CommandItem disabled>Ask AI to paraphrase this text</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },

  {
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-12 z-10">
          <div className="text-4xl font-medium text-black text-center">
            Context-Aware
            <br />
            Artificial Intelligence
          </div>
        </div>
        <Ripple />
      </div>
    ),
  },
  {
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex justify-center content-center h-full w-full">
        <div className="m-auto p-12 z-10">
          <div className="text-4xl font-medium text-black text-center">
            Flexible Licensing
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    ),
  },
];

export default function Feature() {
  return (
    <div className={`${DM_Sans.className}`}>
      <h1 className="text-5xl font-bold mb-6">Don&apos;t doubt us</h1>
      <p className="text-lg mb-12">
        No gimmick, here&apos;s what you can do with Aksara.
      </p>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
