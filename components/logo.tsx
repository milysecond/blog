import localFont from '@next/font/local'
const nasa = localFont({src: 'nasa.otf'})

export default function Logo() {

    return (
        <main className='text-4xl font-extrabold'>
            <h1 className={
                nasa.className
            }>MILYSEC
                <span className="blink">:</span>
            </h1>
        </main>
    )
}
