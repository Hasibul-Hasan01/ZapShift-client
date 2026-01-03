import React from 'react';
import location from '../../../../public/assets/location-merchant.png';

const Merchant = () => {
    return (
        <div className="bg-[#03373d] bg-no-repeat bg-[url(public/assets/be-a-merchant-bg.png)] text-white rounded-2xl  mb-10 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="max-w-sm rounded-lg "
                />
                <div>
                    <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn bg-[#caeb66] rounded-full">Become a Merchant</button>
                    <button className="btn btn-outline text-[#caeb66] rounded-full ms-5">Earn with ZapShift Courier</button>
                </div>
            </div>
        </div>
    );
};

export default Merchant;