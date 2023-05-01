// 404.js
import Link from 'next/link'
import Footer from '../components/Footer'

export default function PageNotFound() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
        Go back home
    </Link>
    <Footer />
  </>
}