import Link from "next/link";
import Image from "next/image";
import DM_Sans from "@/lib/fonts/dm-sans";
import { generateUniqueID } from "@/lib/utils";

export default function Hightlight() {
  return (
    <div className="relative transition-all hover:cursor-pointer hover:shadow-2xl hover:scale-105 active:scale-95 active:animate-pulse">
      <Link href={`/ezralazuardy/${generateUniqueID()}`}>
        <Image
          className="rounded-lg"
          alt="cover"
          src={`https://images.unsplash.com/photo-1717930525765-c7d98db83a8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          sizes="100vw"
          width="800"
          height="800"
          style={{
            aspectRatio: "2/3",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <div className={`${DM_Sans.className} absolute inset-0`}>
          <div className="absolute bottom-0 flex flex-col space-y-2 p-8 pt-16 w-full text-white bg-gradient-to-t from-[#3d3c3c] to-transparent rounded-lg">
            <h1 className="text-lg font-bold">The Emergence of Clean Design</h1>
            <p className="text-sm text-gray-300">
              3 minute read - by{" "}
              <span className="font-bold">@ezralazuardy</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
