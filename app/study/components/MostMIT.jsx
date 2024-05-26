import React from 'react'
import Image from 'next/image'


export default function Most() {
    let img_width = 420;
    let img_height = 406;

    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='d-flex justify-content-center'>
                    <div className='w-75'>
                        <hr />
                    </div>
                </div>

                <div className='container-fluid mt-3 d-flex justify-content-center'>
                    <h2>
                        MIT Certified
                    </h2>
                </div>

                <div className='container-fluid mt-3'>
                    <div className=' d-flex justify-content-center'>
                        <Image src={'/images/studies/mit/c_01.jpg'} width={img_width} height={img_height} className='img-fluid' alt='Loading... | @bulssola' />
                    </div>
                </div>

                <div className='container-fluid mt-4'>
                    <div className='container-fluid d-flex justify-content-center'>
                        <div className='container-fluid w-75'>
                            <p style={{ textAlign: 'justify' }}>
                                During my time at MIT (xPRO), I mastered Data Science and Big Data Analytics: Making data-driven decisions. I applied these techniques to analyze and extract valuable insights from large datasets, enabling informed decision-making processes. This experience deepened my understanding of data manipulation, statistical analysis, and machine learning algorithms, enhancing my ability to solve complex problems and drive innovation in the field of data science.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='w-75'>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
