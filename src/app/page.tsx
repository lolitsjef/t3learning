import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
        {[...images, ...images, ...images].map((pic, index) => (
          <div key={pic.id + "" + index} className= "w-48 flex flex-col gap-2">
            <img src={pic.url} alt="image"/>
            <div>{pic.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
