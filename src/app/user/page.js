"use client";

import { useState } from "react";

export default function User() {
    const [h3style,setH3Style] = useState({backgroundColor : "green"});
    return (
        <div>
            <h1 style={{backgroundColor:"blue"}}> User Page </h1>
            <h2>Heading of 2 for user page</h2>
            <h3 style={h3style}>Heading 3 for user </h3>
            <button onClick={()=>setH3Style({backgroundColor:'red'})}>Update Style</button>
        </div>
    )
} 