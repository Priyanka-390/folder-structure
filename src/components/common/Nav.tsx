import Link from "next/link";

export default function Nav() {
    return (
        <nav>
             <div className="flex py-4 items-center justify-between">
        <a href="/" className="font-bold text-4xl">LOGO</a>
                <div className="flex gap-8">
                    <Link href="/"><button className="py-4 px-6 border-white border-2">HOME</button></Link>
                    <Link href="./about"> <button className="py-4 px-6 border-white border-2">ABOUT</button></Link>
                    <Link href="./contact"><button className="py-4 px-6 border-white border-2">CONTACT</button></Link>
                </div>
                    </div>
        </nav>
    )
}