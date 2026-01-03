import React from 'react';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Service from '../../Components/Service/Service';
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel';
import Divider from '../../Shared/Divider/Divider';
import Benefits from '../../Components/Benefits/Benefits';
import Merchant from './Merchant/Merchant';
import CustomersReview from '../../Components/CustomersReview/CustomersReview';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <FeatureCard />
            <Service />
            <BrandCarousel />
            <Divider />
            <Benefits />
            <Merchant />
            <CustomersReview />
        </div>
    );
};

export default Home;