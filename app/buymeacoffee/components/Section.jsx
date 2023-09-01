import React from 'react';
import Image from 'next/image';

export default function Section() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 d-flex justify-content-center'>
                <Image src={'/images/bcoffee.svg'} height={320} width={320} alt='Coffee | @bulssola' />
            </div>

            <div className='container-fluid mt-2'>
                <h4 className='text-center'>
                    Your Support is Helpful
                </h4>
            </div>

            <div className='container-fluid mt-3 w-75'>
                <p className='text-center'>
                    This way, you not only support my work, but also inspire me to continue sharing relevant content. Each contribution is a reminder of the positive impact we can have when we come together as a community.
                </p>

                <div className='p-1'>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    );
}
