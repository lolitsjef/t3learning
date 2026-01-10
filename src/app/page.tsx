import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <div className="flex flex-wrap gap-4"> 
          {images.map((pic) => (
            <div key={pic.id} className= "w-48 flex flex-col gap-2">
              <img src={pic.url} alt="image"/>
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
