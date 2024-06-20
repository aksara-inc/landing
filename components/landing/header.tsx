import Link from "next/link";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full max-w-7xl m-auto flex justify-between py-10">
      <h1
        className={`${DM_Sans.className} text-3xl font-light tracking-wider leading-tight`}
      >
        aksara.
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
        <Link href="/">
          <Button variant="link" size="icon">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
