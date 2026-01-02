import React from 'react';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Service from '../../Components/Service/Service';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import Divider from '../../Shared/Divider/Divider';
import Benefits from '../../Components/Benefits/Benefits';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <FeatureCard />
            <Service />
            <BrandCarousel />
            <Divider />
            <Benefits />
        </div>
    );
};

export default Home;