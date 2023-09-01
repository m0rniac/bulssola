import React from 'react';
import Image from 'next/image';

import "./Animation.css";

export default function Section() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                {/* [Corpus; Logotype] */}
                <div className='d-flex justify-content-center'>
                    <Image src={'/images/dcode/code04.svg'} height={220} width={220} alt='ReactJS | @bulssola' className='the-logo' />
                </div>

                {/* [Corpus; Description] */}
                <div className='container-fluid mt-4 justify-content-center w-75'>
                    <h2 className='text-center'>
                        My projects in ReactJS
                    </h2>
                    <p className='text-center font-weight-bold'>
                        ReactJS is a JavaScript library used to build interactive and efficient user interfaces using the approach of reusable components, focusing on efficient updates to the virtual DOM, resulting in faster and higher-performing applications.
                    </p>
                </div>

                <div className='container-fluid mt-4 w-75'>
                    <h4 className='text-start'>
                        Latest posts:
                    </h4>
                </div>
            </div>
        </React.Fragment>
    )
}
