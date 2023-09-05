'use client';
import Script from "next/script";

export default function page() {
    return (
        <div>
            <h1> Get User's Location </h1>
            <Script src="/location.js" onLoad={()=>console.log("File Loaded")} />
        </div>
    )
}