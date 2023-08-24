'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
const login = () => {
    const router = useRouter();
    const navigate = (item) => {
        router.push(item);
    }
    const navigatelogin = (item) => {
        router.push("/login/" + item);
    }
    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <Link href="about">Go To About Us Page</Link> < br />
            <Link href="/">Go To Home Page</Link>
            <br />
            <br />
            <br />
            <button onClick={() => navigate("about")}>Go To About Page</button>
            <br />
            <button onClick={() => navigate("/")}>Go To Home Page</button>
            <br />
            <br />
            <br />


            <Link href="about/aboutstudent">Go To About Page Of Student</Link>
            <br />
            <Link href="about/aboutcollege"> Go To About Page Of College</Link>

            <br />
            <br />
            <br />

            <button onClick={() => navigate("about/aboutstudent")}>Go To About Page Of Student</button>
            <br />
            <button onClick={() => navigate("about/aboutcollege")}>Go To About Page Of College</button>

            <br />
            <br />
            <br />
            <button onClick={() => navigatelogin("loginstudent")}>Go To Student Login Page </button>
            <br />
            <button onClick={() => navigatelogin("loginteacher")}>Go To Teacher Login Page </button>

        </div>
    )
}

export default login;