import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Most() {
    let img_width = 300;
    let img_height = 272;

    return (
        <React.Fragment>
            <div className='container-fluid mt-5 w-75'>
                <hr />
                <div className='container-fluid mt-4 d-flex justify-content-center'>
                    <h2>
                        Google Certified
                    </h2>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561891'}>
                            <Image src={'/images/studies/google/g_01.png'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                        </Link>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>What does this mean?</h3>
                        <p>
                            During my time at Google, I mastered the development and implementation of Transformer models, including BERT (Bidirectional Encoder Representations from Transformers). I applied these advanced models to various natural language processing tasks, optimizing the accuracy and efficiency of solutions. This experience allowed me to delve into attention techniques, deep learning, and handling large volumes of data, consolidating my ability to tackle complex challenges in the field of artificial intelligence.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561746'}>
                            <Image src={'/images/studies/google/g_02.png'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                        </Link>
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>What is this?</h3>
                        <p>
                            During my time at Google, I mastered the development and implementation of the Attention Mechanism. I applied this advanced technique to various natural language processing tasks, improving the accuracy and efficiency of our solutions. This experience allowed me to delve into deep learning techniques and the handling of large volumes of data, consolidating my ability to tackle complex challenges in the field of artificial intelligence.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560041'}>
                            <Image src={'/images/studies/google/g_03.png'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                        </Link>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>This means...</h3>
                        <p>
                            During my time at Google, I mastered the introduction and application of Large Language Models. I implemented these advanced models in various natural language processing tasks, improving the accuracy and efficiency of our solutions. This experience allowed me to delve into deep learning techniques and the handling of large volumes of data, consolidating my ability to tackle complex challenges in the field of artificial intelligence.
                        </p>
                    </div>
                </div>

                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <Image src={'/images/studies/google/cg_01.png'} width={584} height={413} className='img-fluid' alt='Loading... | @bulssola' />
                    </div>
                </div>


                <div className="container-fluod mt-3">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
                            <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561801'}>
                                <Image src={'/images/studies/google/g_04.png'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                            <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6559428'}>
                                <Image src={'/images/studies/google/g_05.png'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                            </Link>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560433'}>
                                <Image src={'/images/studies/google/g_06.png'} width={320} height={236} alt='Loading... | @bulssola' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='container-fluid mt-3'>
                    <div className='container-fluid d-flex justify-content-center'>
                        <p style={{ textAlign: 'justify' }}>
                            You can check out the rest of my achievements and studies directly from the platform authorized by Google:
                        </p>
                    </div>

                    <div className='container-fluid d-flex justify-content-center'>
                        <Link href={'https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555'}>
                            <button type="button" className="btn btn-outline-primary">
                                Continue reading on Google
                            </button>
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}
