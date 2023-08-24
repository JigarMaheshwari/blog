'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
const about = () => {
    const router = useRouter();
    const navigate = (item) => {
        router.push(item);
    }
    return (
        <div>
            <h1 className="heading"> About Page </h1>
            <Link href="/login">Go To Login Page</Link> <br />
            <Link href="/">Go To Home Page</Link>
            <br />
            <br />
            <br />
            <button onClick={() => navigate("login")}>Go To Login Page</button>
            <br />
            <button onClick={() => navigate("/")}>Go To Home Page</button>
            <br />
            <br />
            <br />
            <Link href="about/aboutstudent">Go To About Page Of Student</Link>
            <br />
            <Link href="about/aboutcollege">Go To About Page Of College</Link>

            <br />
            <br />
            <br />

            <button onClick={()=>navigate("about/aboutstudent")}>Go To About Page Of Student</button>
            <br />
            <button onClick={()=>navigate("about/aboutcollege")}>Go To About Page Of College</button>
        </div>
    )
}


export default about;