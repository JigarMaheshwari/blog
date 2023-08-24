
'use client';
export default function Lectures({params}){
    console.log(params);
    return (
        <div>
            <h1> Day of college {params.lectures[0]} </h1>
            <h2>Lecture No. {params.lectures[1]}</h2>
        </div>
    )
}