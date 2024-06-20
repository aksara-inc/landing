import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@codaworks/react-glow";
import Link from "next/link";

const prices = [
  {
    name: "Hobby",
    price: "Free",
    button: "Get Started",
    glowColor: "teal",
    features: [
      "Unlimited Stories",
      "Up to 2 Collaborators",
      "Public Licensing",
      "Limited AI Model",
      "Basic AI Operation",
      "500 AI Credits / month",
    ],
  },
  {
    name: "Writer",
    price: "$5.99",
    button: "Upgrade to Writer",
    glowColor: "purple",
    features: [
      "All Hobby Features",
      "Up to 10 Collaborators",
      "Private Licensing",
      "Email Support",
      "Monetization",
      "Enhanced AI Model & Operation",
      "2,500 AI Credits / month",
      "AI-assisted Summarization",
      "AI-assisted Translations",
    ],
  },
  {
    name: "Pro",
    price: "$25.99",
    button: "Upgrade to Pro",
    glowColor: "red",
    features: [
      "All Writer Features",
      "Unlimited Collaborators",
      "Priority Support",
      "Custom Publication",
      "10,000 AI Credits / month",
      "AI-assisted Tag Suggestions",
      "AI-assisted Title Suggestion",
      "AI-assisted Grammar Checker",
      "AI-assisted Image Generation",
    ],
  },
];

export type PriceProps = {
  name: string;
  price: string;
  button: string;
  glowColor: string;
  features: Array<string>;
};

export function Price({
  name,
  price,
  button,
  glowColor,
  features,
}: PriceProps) {
  return (
    <Glow color={glowColor}>
      <div
        className={`border-2 border-transparent glow:border-glow/40 glow:text-glow/40 glow:bg-${glowColor}-100 relative h-full rounded-xl bg-[#f5f3f1] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] p-6`}
      >
        <div className="mb-2 font-semibold text-xl">{name}</div>
        <div className="mb-5 font-black text-xl">{price}</div>
        <div className="font-normal text-md mb-16">
          {features.map((feature, index) => (
            <div className="flex space-x-2 mt-3" key={index}>
              <CheckIcon className="w-4 h-4 mt-1" />
              <span className="text-md font-normal">{feature}</span>
            </div>
          ))}
        </div>
        <div className="absolute w-full bottom-0 right-0 p-6">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/settings/billing`}>
            <Glow>
              <Button className="w-full glow:text-glow/400 glow:bg-gray-500">
                {button}
              </Button>
            </Glow>
          </Link>
        </div>
      </div>
    </Glow>
  );
}

export default function Pricing() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-6 glow:bg-teal-100">
        Simple Pricing
      </h1>
      <p className="text-lg mb-12 glow:bg-purple-100">
        Transform your thought into a readable masterpiece, starting from $0 per
        month.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 glow:bg-red-100">
        {prices.map((price, index) => (
          <Price key={index} {...price} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        <div className="flex lg:justify-start col-span-2">
          <span className="text-md font-normal my-auto">
            We use different AI Model based on your plan and operation, such as
            Llama, Bert, M2M, or Stable Diffusion.
          </span>
        </div>
        <div className="flex lg:justify-end">
          <div className="my-auto">
            <Link href="/pricing">
              <Button variant="link" className="text-md flex space-x-2">
                <span>See pricing detail</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
