import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
      <div className='bg-white text-black text-center text-sm
      '>

        <a> Privacy</a> 
        <span className='blink'>:</span>
        <a>Terms</a>
        <span className='blink'>:</span>
        Milysec © Copyright {new Date().getFullYear()}
      </div>
    </>
  )
}
