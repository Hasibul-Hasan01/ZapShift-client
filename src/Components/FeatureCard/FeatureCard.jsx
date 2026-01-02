import React from 'react';
import bookingIcon from '../../../public/assets/bookingIcon.png'

const FeatureCard = () => {
    return (
        <div className='my-5 px-15'>
            <section>
                <h1 className='font-mono text-2xl font-bold py-5'>How it Works</h1>
            </section>
            <section className='card grid grid-cols-4 gap-4'>
                <div className='bg-[#ffffff] p-5 rounded-2xl'>
                    <img src={bookingIcon} alt="delivery-png" />
                    <h1 className='font-mono font-bold text-xl py-2'>Booking Pick & Drop</h1>
                    <p className='font-mono'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-[#ffffff] p-5 rounded-2xl'>
                    <img src={bookingIcon} alt="delivery-png" />
                    <h1 className='font-mono font-bold text-xl py-2'>Booking Pick & Drop</h1>
                    <p className='font-mono'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-[#ffffff] p-5 rounded-2xl'>
                    <img src={bookingIcon} alt="delivery-png" />
                    <h1 className='font-mono font-bold text-xl py-2'>Booking Pick & Drop</h1>
                    <p className='font-mono'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-[#ffffff] p-5 rounded-2xl'>
                    <img src={bookingIcon} alt="delivery-png" />
                    <h1 className='font-mono font-bold text-xl py-2'>Booking Pick & Drop</h1>
                    <p className='font-mono'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </section>
        </div>
    );
};

export default FeatureCard;