import React from 'react'
import Image from 'next/image'

export default function Another() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='container-fluid'>
                    <h4 className='text-start'>
                        Other tasks I can perform:
                    </h4>
                </div>

                {/* A) Color Splash */}
                <div className='container-fluid mt-4'>
                    <div className='container-fluid'>
                        <div className='container-fluid'>
                            <h5>
                                1. Color Splash
                            </h5>
                        </div>
                        <div className='container-fluid'>
                            <p>
                                Replace the original color of one or more objects with a completely different one in a realistic manner, useful for correction and content variance.
                            </p>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row mt-5 d-flex justify-content-center align-items-center'>
                            <div className='col-md-6 d-flex justify-content-center order-md-2'>
                                <Image
                                    src={'/images/portfolio/design/another/img_01.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                />
                            </div>
                            <div className='col-md-6 d-flex justify-content-center order-md-1 mt-3 mt-md-0'>
                                <Image
                                    src={'/images/portfolio/design/another/img_02.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* B) Generative AI */}
                <div className='container-fluid mt-5'>
                    <div className='container-fluid'>
                        <div className='container-fluid'>
                            <h5>
                                2. Generative AI
                            </h5>
                        </div>
                        <div className='container-fluid'>
                            <p>
                                Creation of various scenarios from a single photo in a realistic manner, useful for content generation.
                            </p>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row mt-5 d-flex justify-content-center align-items-center'>
                            <div className='col-md-6 d-flex justify-content-center order-md-2'>
                                <Image
                                    src={'/images/portfolio/design/another/img_03.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                />
                            </div>
                            <div className='col-md-6 d-flex justify-content-center order-md-1 mt-3 mt-md-0'>
                                <Image
                                    src={'/images/portfolio/design/another/img_04.png'}
                                    width={533}
                                    height={533}
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
