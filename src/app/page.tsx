import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/db/queries";
import Image from "next/image";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((pic) => (
        <div key={pic.id} className= "w-48 h-48 flex flex-col gap-2">
          <Image src={pic.url} alt={pic.name} unoptimized width={480} height={480} style={{objectFit: "contain"}}/>
          <div>{pic.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className = "h-full w-full text-center text-2xl">
          Please sign in to view your images
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
