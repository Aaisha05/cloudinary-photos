"use client";

import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

export type UploadResult = {
  info:{
    public_id:string
  },
  event:'success',
}

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
      onUpload={(result:UploadResult)=>{
        setImageId(result.info.public_id);

      }}
      
      uploadPreset="ajwjotej" />

{imageId && (
      <CldImage
      width="400"
      height="300"
      src={imageId}
      sizes="100vw"
      blurFaces
      alt="Description of my image"
      />
)}
      
    </main>
  );
}