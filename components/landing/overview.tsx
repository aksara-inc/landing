"use client";

import DM_Sans from "@/lib/fonts/dm-sans";
import { TypeAnimation } from "react-type-animation";
import { Glow } from "@codaworks/react-glow";
import { Button } from "@/components/ui/button";
import { formatTypingSequence } from "@/lib/utils";
import { translate } from "@ezralazuardy/aksara";

const sequence = formatTypingSequence([
  "Writing platform for  human.",
  "Writing platform for  students.",
  "Writing platform for  artists.",
  "Writing platform for  developers.",
  "Writing platform for  engineers.",
  "Writing platform for  everyone.",
  "Writing platform that dropped out from college.",
  "Writing platform that don't support genocide.",
  "Writing platform that powered by AI.",
  "Writing platform that better than Medium.",
  "Writing platform that values it's writers.",
  "Writing platform with less distractions.",
  "人間のためのライティングプラットフォーム。",
  "인간을 위한 글쓰기 플랫폼.",
  translate("wadah tulisan kanggo menungso."),
]);

export default function Overview() {
  return (
    <div className="col-span-2 space-y-6 pb-12 pe-32 my-auto">
      <h2 className="text-7xl font-bold tracking-tight min-h-40">
        <TypeAnimation
          preRenderFirstString={true}
          speed={50}
          repeat={Infinity}
          sequence={sequence}
        />
      </h2>
      <p className={`text-xl text-gray-600 ${DM_Sans.className}`}>
        Join the other 1000+ writers and share your stories with the world.
      </p>
      <GetStartedButton />
    </div>
  );
}

function GetStartedButton() {
  return (
    <Glow>
      <Button className="glow:text-glow/400 glow:bg-gray-500 flex space-x-2">
        <span>🚀</span>
        <span>Get Started</span>
      </Button>
    </Glow>
  );
}
