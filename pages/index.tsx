import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Job Easy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/work.ico" />
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Banner />
        <Footer />
      </main>
    </>
  )
}
