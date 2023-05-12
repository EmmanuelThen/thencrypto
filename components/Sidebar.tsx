'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Sidebar = (props: Props) => {
  const [news, setNews] = useState([]);

  function stripHtmlTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  }
  

  {/** To call our API */ }
  useEffect(() => {
    const getNews = async () => {
      const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset=28800&lang_ID=1';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COIN_SEARCH_API_KEY,
          'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result)
        const results = result.data[0].screen_data.news.map((item) => ({
          ...item,
          BODY: stripHtmlTags(item.BODY),
        }));
        setNews(results)
        //console.log(results)
      } catch (error) {
        console.error(error);
      }
    };
    getNews()
  }, [])


  








  return (
    <div className='hero_wrapper hidden md:flex flex-col md:min-w-[40%] lg:min-w-[50%] w-[50%] bg-[#191716]'>
      <div className='flex justify-center'>
        <h1 className='font-semibold text-xl p-2 mb-2 text-white'>Top Crypto News</h1>
      </div>

      <div className='p-20'>
        {news.map((news) => (
          <div className='hero_wrapper flex flex-col items-center sm:text-sm lg:text-base p-5 text-gray-300 text-center' key={news.news_ID}>
            <div className='mb-2 font-semibold'>
              {news.HEADLINE}
            </div>
            <div className='mb-2'>
              <Image src={news.related_image} alt='image' width={500} height={500} />
            </div>
            <div>
              {news.BODY}
            </div>
            <div className='hover:text-[#347fc4] hover:underline'>
              <Link href={news.news_link} target='_blank' >
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