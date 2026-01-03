import React from 'react';
import safeDelivery from '../../../public/assets/safe-delivery.png'
import liveTracking from '../../../public/assets/live-tracking.png'


const Benefits = () => {
    return (
        <div className='mt-15'>
            {/* Card 1 */}
            <div className='grid grid-cols-4 px-15 mx-15 bg-[#ffffff]  rounded-2xl py-10 mb-10'>
                <div className='col-span-1 border-r-2 border-[#03373d]'>
                    <img className='h-[150px]' src={safeDelivery} alt="" />
                </div>
                <div className='col-span-3 font-mono grid items-center px-15'>
                    <div>
                        <h1 className='text-xl font-semibold'>24/7 Call Center Support</h1>
                        <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className='grid grid-cols-4 px-15 bg-[#ffffff] rounded-2xl py-10 mb-10'>
                <div className='col-span-1 border-r-2 border-[#03373d]'>
                    <img className='h-[150px]' src={liveTracking} alt="" />
                </div>
                <div className='col-span-3 font-mono grid items-center px-15'>
                    <div>
                        <h1 className='text-xl font-semibold'>Live Parcel Tracking</h1>
                        <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className='grid grid-cols-4 px-15 bg-[#ffffff] rounded-2xl py-10 mb-10'>
                <div className='col-span-1 border-r-2 border-[#03373d]'>
                    <img className='h-[150px]' src={safeDelivery} alt="" />
                </div>
                <div className='col-span-3 font-mono grid items-center px-15'>
                    <div>
                        <h1 className='text-xl font-semibold'>100% Safe Delivery</h1>
                        <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;