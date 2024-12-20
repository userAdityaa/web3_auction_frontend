import { Content } from "@/components";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Anta } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ['latin'], 
  weight: '400', 
});

const anta = Anta({
  subsets: ['latin'], 
  weight: "400"
});

export default function Home() {
  return (
    <div className={`h-screen w-full relative ${anta.className}`}>
      <Image src='/landing_image.png' alt="landing page image" width={480} height={400} className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></Image>

      <Content/>

      <div className="w-[70rem] h-[15rem] absolute bottom-10 left-5 text-zinc-300 text-[70px] font-bold">
      EXPERIENCE LIVE NFT AUCTIONS POWERED BY WEB3
      </div>
    </div>
  );
}