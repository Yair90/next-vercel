
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>

      <h1 className='title'>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className='code'>pages/contact.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}