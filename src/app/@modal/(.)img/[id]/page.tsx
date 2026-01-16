import { getImageById } from "~/server/db/queries";

export default async function PhotoModal({
    params: { id: photoId },
}: { 
    params: { id: string }
}) {
    const image = await getImageById(Number(photoId));
    return <img src={image.url} alt={image.name} className="w-96"/>;
}


