import Feature from "@/components/landing/feature";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hightlight from "@/components/landing/highlight";
import Overview from "@/components/landing/overview";
import Pricing from "@/components/landing/pricing";
import Reveal from "@/components/landing/reveal";
import { GlowCapture } from "@codaworks/react-glow";

export default function Page() {
  return (
    <div className="bg-[#ebe6e2]">
      <GlowCapture>
        <Header />
        <div className="w-full max-w-7xl m-auto">
          <div className="grid grid-cols-3">
            <Overview />
            <Hightlight />
          </div>
          <div className="pb-32">
            <Reveal />
          </div>
          <div className="pb-32">
            <Feature />
          </div>
          <div className="pb-32">
            <Pricing />
          </div>
        </div>
        <Footer />
      </GlowCapture>
    </div>
  );
}
