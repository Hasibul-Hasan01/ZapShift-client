import React from 'react';
import customer from '../../../public/assets/customer-top.png';

const CustomersReview = () => {
    return (
        <div className='mt-15'>
            <section>
                <div className='flex justify-center mb-5'>
                    <img src={customer} alt="" />
                </div>
                <div className='font-mono text-center'>
                    <h1 className='font-semibold text-2xl mb-2'>What our customers are sayings</h1>
                    <p className='mb-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
                </div>
            </section>
        </div>
    );
};

export default CustomersReview;