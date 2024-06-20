import Link from "next/link";
import DM_Sans from "@/lib/fonts/dm-sans";
import Globe from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <div
        className={`${DM_Sans.className} relative flex h-full w-full items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60`}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
          Let The World
          <br />
          Hear Your Stories
        </span>
        <Globe className="top-32" />
        <div className="absolute bottom-0 bg-gradient-to-t from-[#ccbfb5] to-transparent min-h-40 w-full"></div>
      </div>
      <footer className="w-full bg-[#ccbfb5] pt-16 pb-14 px-8">
        <div
          className={`${DM_Sans.className} flex justify-between max-w-7xl m-auto`}
        >
          <h1 className="text-lg tracking-tighter pb-0">
            Aksara Inc. All Right Reserved.
          </h1>
          <div className="flex space-x-14">
            <Link href="/">
              <Button variant="link" size="icon">
                Writers
              </Button>
            </Link>
            <Link href="/">
              <Button variant="link" size="icon">
                Pricing
              </Button>
            </Link>
            <Link href="/">
              <Button variant="link" size="icon">
                About
              </Button>
            </Link>
            <Link href="/">
              <Button variant="link" size="icon">
                Support
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
