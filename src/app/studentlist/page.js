"use client";
import Link from "next/link";

export default function StudentList() {
    const studentname = [
        {
            id: "1",
            name: "jigar"
        },
        {
            id: "2",
            name: "peter"
        },
        {
            id: "3",
            name: "sam"
        },
        {
            id: "4",
            name: "nirajana"
        }
    ];
    return (
        <div>
            <h1> Student List </h1>
            <ul>
                {/* //Dynamic routing with array */}
                {
                    studentname.map((item) => {
                        return <li>
                            <Link href={`/studentlist/${item.name}`}>{item.name}</Link>
                        </li>
                    })

                }

                {/* //Static routing */}

                {/* <li>
                    <Link href="/studentlist/peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/sam">Sam</Link>
                </li>
                <li>
                    <Link href="/studentlist/nirajana">Nirajana</Link>
                </li> */}
            </ul>
        </div>
    )
}