"use client";

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function UploadButton(){
    const router = useRouter();
    return (
        <Button asChild>
            <CldUploadButton
            onUpload={(result:UploadResult)=>{
                //console.log("refresh");
                setTimeout(()=>{
                    console.log("refresh");
                    router.refresh();
                },1000)
                //router.refresh();

            }}
            uploadPreset="ajwjotej"
            />
        </Button>

    )
}








/*
"use client";

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function UploadButton(){
    const router = useRouter();
    return (
        <Button asChild>
            <CldUploadButton
            onUpload={(result:UploadResult)=>{

            }}
            uploadPreset="damqezdun"
            />
        </Button>

    )
}*/