import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <Image src='/landing_image.png' alt="landing page image" width={450} height={400} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></Image>
    </div>
  );
}