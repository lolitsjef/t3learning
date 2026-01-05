import { url } from "inspector";
import Link from "next/link";


const mockUrls = [
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDM4W6l5V2Nj3tfRQ1ZYCuOVbk9yAN5ThvJEGLs",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMyotLu1em25jCt0Z3AEPRwWNTzs6geUS4JY9b",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMhSpm0X6INxHO7wpgD4C6Fa5EJhPlbc23RIMz",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMWScXYTZHNsEXgcIy3jbwTa8rnd5PVDpF9qBt",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDM4W6l5V2Nj3tfRQ1ZYCuOVbk9yAN5ThvJEGLs",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMyotLu1em25jCt0Z3AEPRwWNTzs6geUS4JY9b",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMhSpm0X6INxHO7wpgD4C6Fa5EJhPlbc23RIMz",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMWScXYTZHNsEXgcIy3jbwTa8rnd5PVDpF9qBt",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDM4W6l5V2Nj3tfRQ1ZYCuOVbk9yAN5ThvJEGLs",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMyotLu1em25jCt0Z3AEPRwWNTzs6geUS4JY9b",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMhSpm0X6INxHO7wpgD4C6Fa5EJhPlbc23RIMz",
  "https://43qnrtw1ps.ufs.sh/f/Gm1NBrCiKqDMWScXYTZHNsEXgcIy3jbwTa8rnd5PVDpF9qBt",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
        {mockImages.map((pic) => (
          <div key={pic.id} className= "w-48">
            <img src={pic.url} alt="image"/>
          </div>
        ))}
      </div>
    </main>
  );
}
