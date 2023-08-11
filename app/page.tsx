import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
       <p>
      this is home page
    </p>
      <Link href={'/about'}> go to about page</Link>
    </div>
  )
}
