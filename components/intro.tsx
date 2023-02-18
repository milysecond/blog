import { CMS_NAME, CMS_URL } from '../lib/constants'
import Logo from './logo'
export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
     <Logo/>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 italic">
        Fast, Web, App Development{' '}
      </h4>
    </section>
  )
}
