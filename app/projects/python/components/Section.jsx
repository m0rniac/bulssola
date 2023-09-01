import React from 'react';
import Image from 'next/image';

import "./Animation.css";

export default function Section() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                {/* [Corpus; Logotype] */}
                <div className='d-flex justify-content-center'>
                    <Image src={'/images/dcode/code02.svg'} height={220} width={220} alt='Python | @bulssola' className='the-logo' />
                </div>

                {/* [Corpus; Description] */}
                <div className='container-fluid mt-4 justify-content-center w-75'>
                    <h2 className='text-center'>
                        My Projects in Python
                    </h2>
                    <p className='text-center font-weight-bold'>
                        Python is a powerful programming language that allows building a wide range of software due to its syntax and extensive range of libraries, enabling the creation of interactive and scalable applications in an agile manner.
                    </p>

                    <div className='container-fluid mt-5'>
                        <h4 className='text-start'>
                            Latest posts:
                        </h4>
                    </div>
                </div>

                {/* [Corpus; ] */}
            </div>
        </React.Fragment>
    )
}
