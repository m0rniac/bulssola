import React from 'react'
import Image from 'next/image'

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 p-3'>
                <div className='container-fluid mt-4'>
                    <div className='d-flex justify-content-center'>
                        <Image src={'/images/portfolio/design/init_01.svg'} width={250} height={250} className='img-fluid' />
                    </div>
                </div>

                <div className='container-fluid mt-5 w-75'>
                    <div className='container-fluid'>
                        <h3 style={{ textAlign: 'center' }}>
                            Some of my design works...
                        </h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
