import React from 'react';
import Image from 'next/image';

export default function Alert() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <br /><br />
                <div className='d-flex justify-content-center'>
                    <Image src={"/images/images/image15.svg"} width={120} height={120} alt='@bulssola' />
                </div>
                <p className='text-center text-muted mt-3'>
                    Please refrain from making comments unrelated to the topic.
                </p>
            </div>
        </React.Fragment>
    );
};
