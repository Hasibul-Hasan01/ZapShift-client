import React from 'react';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Service from '../../Components/Service/Service';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <FeatureCard />
            <Service />
            <BrandCarousel />
        </div>
    );
};

export default Home;