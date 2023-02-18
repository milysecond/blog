import Link from 'next/link'
import Logo from './logo'

export default function Header() {
    return (
        <>
            <h2>
                <Link href="/" className="hover:underline">
                    <Logo/>
                </Link>
            </h2>
        </>

    )
}
