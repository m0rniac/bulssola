import React from 'react'
import Image from 'next/image'

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 p-3'>
                <div className='container-fluid mt-4'>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/images/portfolio/cw-trans/init_03.svg'} width={260} height={260} className='img-fluid' alt='Software Dev | @bulssola' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <div className='container-fluid d-flex justify-content-center'>
                                <h3>Copywriting Work</h3>
                            </div>
                            <div className='container-fluid d-flex justify-content-center'>
                                <p style={{ 'textAlign': 'justify' }}>
                                    In this section, I share some of my work as a Copywriting writer, Content & SEO Optimization, and other categories. Unfortunately, I cannot show my work as a Ghostwriter.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center'>
                                <Image src={'/images/portfolio/cw-trans/init_04.svg'} width={300} height={300} className='img-fluid' alt='Translator | @bulssola' />
                            </div>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='container-fluid d-flex justify-content-center'>
                                <h3>Translation Work</h3>
                            </div>
                            <div className='container-fluid d-flex justify-content-center'>
                                <p style={{'textAlign': 'justify'}}>
                                    I also share my translation work, which ranges from translating school projects to modern research papers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid mt-5 w-75'>
                    <hr />
                    <div className='container-fluid'>
                        <p style={{ textAlign: 'justify' }}>
                            I perform writing and translation tasks exactly as requested by my clients, including text, format, scheme, jargon, and tabulation. Please do not think there are rendering errors or poor writing in any of my work; this is how my clients wanted it.
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    )
}
