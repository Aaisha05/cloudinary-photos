
import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./cloudinary-image";

export type SearchResult={
    public_id:string;
    tags:string[]
}


export default async function GalleryPage(){
    const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at","desc")
    .max_results(10)
    .with_field("tags")
    .execute() as {resources: SearchResult[]};
    console.log("results",results);


    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton/>
                
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                 {results.resources.map((result)=>(
                    <CloudinaryImage
                    key={result.public_id}
                    //src={result.public_id}
                    //publicId={result.public_id}
                    imageData={result}
                    width="400"
                    height="300"
                    alt="an image of smthg"
                    />
                 ))}
                </div>
                
            </div>
        </section>
    )
}