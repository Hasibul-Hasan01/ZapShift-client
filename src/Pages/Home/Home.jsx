import React from 'react';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Service from '../../Components/Service/Service';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <FeatureCard />
            <Service />
        </div>
    );
};

export default Home;