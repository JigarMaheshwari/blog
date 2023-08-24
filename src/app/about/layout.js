'use client';
import Link from 'next/link';
import './about.css';
import { usePathname } from 'next/navigation';
export default function layout({ children }) {
    const currentpathname = usePathname();
    console.log(currentpathname);
    return (
        <div>
            {
                currentpathname !== "/about/aboutcollege" ?
                    <ul className='about-menu'>
                        <li>
                            <h4> About Us Navbar </h4>
                        </li>
                        <li>
                            <Link href="/about">Main About</Link>
                        </li>
                        <li>
                            <Link href="about/aboutstudent">Student About</Link>
                        </li>
                        <li>
                            <Link href="about/aboutcollege">College About</Link>
                        </li>
                    </ul>
                    : <Link href="/about">Go To Main About Page</Link>
            }
            {children}
        </div>
    )
}
