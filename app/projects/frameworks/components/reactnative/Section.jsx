import React from 'react';
import Image from 'next/image';

import "./Animation.css";

export default function Section() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                {/* [Corpus; Logotype] */}
                <div className='d-flex justify-content-center'>
                    <Image src={'/images/dcode/code06.svg'} height={220} width={220} alt='ReactJS | @bulssola' className='logo-two' />
                </div>

                {/* [Corpus; Description] */}
                <div className='container-fluid mt-4 justify-content-center w-75'>
                    <h2 className='text-center'>
                        My projects in React Native
                    </h2>
                    <p className='text-center font-weight-bold'>
                        React Native is a mobile application development framework based on JavaScript and React. It enables developers to create native applications for both iOS and Android using shared code, saving time and resources. This is achieved by utilizing reusable components that translate into native platform elements at runtime, maintaining high performance.
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
