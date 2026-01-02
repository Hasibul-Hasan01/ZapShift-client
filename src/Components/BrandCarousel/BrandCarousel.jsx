import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from '../../../public/assets/brands/amazon.png'
import brand2 from '../../../public/assets/brands/amazon_vector.png'
import brand3 from '../../../public/assets/brands/casio.png'
import brand4 from '../../../public/assets/brands/moonstar.png'
import brand5 from '../../../public/assets/brands/randstad.png'
import brand6 from '../../../public/assets/brands/star.png'
import brand7 from '../../../public/assets/brands/start_people.png'

const BrandCarousel = () => {
    return (
        <div className='pt-10' >
            <section className='font-mono text-center'>
                <h1 className='text-2xl font-bold text-[#03373d]'>We've helped thousands of sales teams</h1>
            </section>
            <section className='py-10 px-15'>
                <Marquee className='gap-5'>
                   <img className='mr-15' src={brand1} alt="" />
                   <img className='mr-15' src={brand3} alt="" />
                   <img className='mr-15' src={brand4} alt="" />
                   <img className='mr-15' src={brand5} alt="" />
                   <img className='mr-15' src={brand2} alt="" />
                   <img className='mr-15' src={brand6} alt="" />
                   <img className='mr-15' src={brand7} alt="" />
                </Marquee>
            </section>
        </div>
    );
};

export default BrandCarousel;