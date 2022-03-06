import Feed from '@/components/Feed'
import Header from '@/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  )
}

export default Home
