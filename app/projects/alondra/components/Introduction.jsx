import React from 'react';
import Image from 'next/image';

export default function Introduction() {
    return (
        <React.Fragment>
            <div>
                <div className='container-fluid d-flex justify-content-center mt-5'>
                    <Image src={'/images/posts/alondra/svg_logo.svg'} width={320} height={240} alt='Alondra | @bulssola' className='d-block user-select-none img-fluid' />
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='mt-4 justify-content-center w-75'>
                        <h2 className='text-center'>Alondra Messenger</h2>
                        <p className='text-center'>Anonymous, private, and secure Peer-2-Peer messaging network that operates through TOR</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='w-75'>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
