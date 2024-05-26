import React from 'react';
import Image from 'next/image';

export default function Introduction() {
    return (
        <React.Fragment>
            {/* [Corpus; Logotype] */}
            <div className='container-fluid mt-5 d-flex justify-content-center'>
                <Image src={'/images/posts/torogos/Logo_01.png'} width={220} height={220} alt='TorogOS | Logotype' />
            </div>

            <div className='container-fluid'>
                <h1 className='text-center'>
                    Torog OS
                </h1>
                <p className='text-center fs-5'>
                    An option for resource maximization and bloatware elimination.
                </p>
            </div>
        </React.Fragment>
    );
}
