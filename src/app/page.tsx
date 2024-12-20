import { Content } from "@/components";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Anta } from "next/font/google";
import { Button } from "@/components/ui/button";

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

      <div className="w-[70rem] h-[15rem] absolute bottom-2 left-5 text-zinc-300 text-[72px] font-bold">
      EXPERIENCE LIVE NFT AUCTIONS POWERED BY WEB3
      </div>

      <div className="bg-black w-[22rem] h-[16rem] absolute -right-4 top-[17rem] rounded-xl p-8 bg-opacity-15 flex items-center justify-center">
        <div className="flex flex-col text-white text-opacity-60 text-[15px]">
          <p>\\\ \\\\ \\\ \\\\ \\\\\ \\\\</p>
          <p>UNLEASH THE POWER OF TRANSPARENT, REAL-TIME AND SECURE MINTING EXPERIENCES WITH OUR AUCTION PLATFORM</p>
          <p>\\\ \\\\ \\\ \\\\ \\\\\ \\\\</p>
        </div>
      </div>

      <div className="absolute flex flex-col bottom-16 right-5 min-h-20 w-14 gap-4">
        <button className="bg-white rounded-md p-2">
          <Image src='/twitter.png' alt="twitter" height={20} width={40} />
        </button>
        <button className="bg-white rounded-xl p-2">
          <Image src='/github.png' alt="github" height={20} width={40} />
        </button>
      </div>
    </div>
  );
}