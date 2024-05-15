import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeaturedWriter from './FeaturedWriter';

const FeaturedWriters = () => {
  const {data:writers} =useQuery({
    queryKey:['featurewriters'],
    queryFn: async()=>{
      const res = await fetch('/writer.json');
      return res.json();
    }
  })
  console.log(writers);
  return (
    <div className='space-y-5 lg:p-10 p-5'>
     <h1 className="text-center md:text-4xl text-xl font-bold text-green-700 "> Explore Our Blog Categories</h1>
        <p className="text-center  md:text-3xl font-extralight text-xl text-gray-700  ">Dive into our diverse range of blog categories curated to cater to every interest and curiosity. From tech trends to lifestyle hacks, stay informed and entertained with our engaging content across various topics. </p>

        <div className='md:grid md:grid-cols-2 md:gap-2 space-y-5 p-10'>
          {
            writers?.map(writer=><FeaturedWriter
            key={writer.name}
            writer={writer}
            ></FeaturedWriter>)
          }
        </div>
    </div>
    
  );
};

export default FeaturedWriters;