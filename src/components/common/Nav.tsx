import Link from "next/link";

export default function Nav() {
    return (
        <nav>
             <div className="flex py-4 items-center justify-between">
        <a href="/" className="font-bold text-4xl">LOGO</a>
                <ul className="flex gap-8">
                    <li>
                        <Link href="/" className="py-4 px-6 border-white border-2">HOME</Link>
                    </li>
                    <li>
                        <Link href="./about" className="py-4 px-6 border-white border-2">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="./contact"className="py-4 px-6 border-white border-2">CONTACT</Link>
                    </li>
                </ul>
                    </div>
        </nav>
    )
}