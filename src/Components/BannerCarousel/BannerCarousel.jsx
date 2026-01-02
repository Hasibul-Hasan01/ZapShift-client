import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../public/assets/banner/banner1.png'
import banner2 from '../../../public/assets/banner/banner2.png'
import banner3 from '../../../public/assets/banner/banner3.png'

const BannerCarousel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='mb-5'>
                <div>
                    <img src={banner1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={banner2} />
                    {/* <p className="legend">Legend 2</p>?\ */}
                </div>
                <div>
                    <img src={banner3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    );
};

export default BannerCarousel;