import Head from 'next/head'

import CockTailItem from '../components/cocktailItem'

let cocktailList = [
  {
    "imgSrc": "/cocktails/blue_lagoon.png",
    "title": "Blue Lagoon",
    "desc": "A very blue drink"
  },
  {
    "imgSrc": "/cocktails/mojito.png",
    "title": "Mojito",
    "desc": "Mojito"
  },
  {
    "imgSrc": "/cocktails/blue_lagoon.png",
    "title": "Blue Lagoon",
    "desc": "A very blue drink"
  },
  {
    "imgSrc": "/cocktails/blue_lagoon.png",
    "title": "Blue Lagoon",
    "desc": "A very blue drink"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900">
      <Head>
        <title>Lingo's bar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 pb-20 text-center">

        <div className="py-60">
          <h1 className="text-white text-6xl font-bold mb-5">
            Welcome to{' '}
            <span className="text-blue-600">Lingo's bar</span>
          </h1>

          <p className="text-white mt-3 text-2xl">
            Located at{' '}
            <a className="text-blue-500 hover:text-blue-400" href="https://goo.gl/maps/YssSaZhpmWucQmrMA" target="_blank">128 Middle Street, Cleveland</a>
          </p>
        </div>

        <div className="w-full border-t">
          <h2 className="text-white text-5xl font-bold my-10">Menu</h2>

          <div className="flex flex-col justify-center items-center">
            {cocktailList.map(
              (item, index) => (
                <CockTailItem
                  key={index}
                  leftAligned={index % 2 == 0}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                />
              )
            )}
          </div>
          
        </div>
      </main>
    </div>
  )
}
