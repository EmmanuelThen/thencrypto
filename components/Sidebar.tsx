'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  coinName: string,
}

const Sidebar = ({ coinName }: Props) => {
  const [news, setNews] = useState([]);



  {/** To call our API */ }
  useEffect(() => {
    const getNews = async () => {
      const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=crypto%20${coinName}&textDecorations=false&freshness=Day&textFormat=Raw&safeSearch=Strict`;
      const options = {
        method: 'GET',
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COIN_SEARCH_API_KEY,
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setNews(result.value)
      } catch (error) {
        console.error(error);
      }
    };
    getNews()
  }, [coinName])

  const placeHolderImg = 'https://www.bankrate.com/2021/12/12091324/Best-blockchain-ETFs.jpg?auto=webp&optimize=high&crop=16:9&width=912'

  return (
    <div className='md:flex md:flex-col md:min-w-[45%] lg:min-w-[50%] md:w-full '>
      <div className='flex justify-center mt-5'>
        <h1 className='text-xl p-2  text-gray-400 tracking-[5px]'>Top {coinName} News</h1>
      </div>
      <div className='flex text-xs overflow-x-scroll p-3 lg:p-10 md:text-sm lg:text-base  scroll-smooth'>
        {news.map((news) => (
          <div className='graph_wrapper flex flex-col items-center justify-center gap-3 p-5 mr-3  md:mb-3 min-w-full sm:text-sm lg:text-base md:p-5 text-black md:text-center' key={news.news_ID}>
            <div className='text-center font-semibold'>
              {news.name}
            </div>
            <div className=''>
              <Image src={news.image?.thumbnail?.contentUrl || placeHolderImg} alt='image' width={200} height={200} />
            </div>
            <div className='text-gray-500'>
              {news.description}
            </div>
            <div className=' text-[#347fc4]/80 hover:text-[#347fc4] hover:underline'>
              <Link href={news.url} target='_blank' >
                Click here for full article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar