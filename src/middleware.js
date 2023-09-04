import { NextResponse } from "next/server";
export default function MiddleWare(request){
    //for all

    // if(request.nextUrl.pathname!=="/login"){
    //     return NextResponse.redirect(new URL("/login",request.url));
    // }

    // for specific route
   
        return NextResponse.redirect(new URL("/login",request.url));
    
}

export const config={
    matcher : "/about/:path*"  //for multiple you can use array like this --> matcher : ["/about/:path*","/about/:path*"];
}