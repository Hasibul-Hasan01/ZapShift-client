import React from 'react';
import service from '../../../public/assets/service.png'

const Service = () => {
    return (
        <div className='bg-[#03373d] rounded-2xl py-20 mt-15 px-15'>
            <section className='px-40 text-center text-white font-mono pb-10'>
                <h1 className='text-2xl font-bold mb-3'>Our Services</h1>
                <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </section>
            <section className='card grid grid-cols-3 gap-5'>
                {/* Card-1 */}
                <div className='bg-[#ffffff] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Express  & Standard Delivery</h1>
                    <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* Card-2 */}
                <div className='bg-[#caeb66] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Nationwide Delivery</h1>
                    <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                {/* Card-3 */}
                <div className='bg-[#ffffff] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Fulfillment Solution</h1>
                    <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                {/* Card-4 */}
                <div className='bg-[#ffffff] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Cash on Home Delivery</h1>
                    <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                {/* Card-5 */}
                <div className='bg-[#ffffff] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Corporate Service / Contract In Logistics</h1>
                    <p>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                {/* Card-6 */}
                <div className='bg-[#ffffff] font-mono rounded-2xl p-7 text-center'>
                    <section className='flex justify-center pb-3'>
                        <img src={service} alt="service-icon" />
                    </section>
                    <h1 className='text-xl font-bold'>Parcel Return</h1>
                    <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </section>
        </div>
    );
};

export default Service;