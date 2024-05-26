import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Most() {
    let img_width = 350;
    let img_height = 247;

    return (
        <React.Fragment>
            <div className='container-fluid mt-5 w-75'>
                <hr />
                <div className='container-fluid mt-4 d-flex justify-content-center'>
                    <h2>
                        Udemy Certifications
                    </h2>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <Image src={'/images/studies/udemy/c_01.jpg'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>What does this mean?</h3>
                        <p>
                            During my time at Udemy, I mastered the Linux command line. I used these skills to efficiently manage Linux-based systems, perform system administration tasks, automate processes, and work effectively in development and production environments. This experience allowed me to gain a deep understanding of Linux tools and commands, strengthening my ability to solve problems and optimize productivity in Unix-based computing environments.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Image src={'/images/studies/udemy/c_02.jpg'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>What is this?</h3>
                        <p>
                            During my Udemy course, I mastered CSS, Bootstrap, JavaScript, and Python stack. These skills empowered me to create responsive web apps with sleek styling (CSS), flexible layouts (Bootstrap), dynamic client-side interactions (JavaScript), and robust server-side functionality (Python).
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <Image src={'/images/studies/udemy/c_03.jpg'} width={img_width} height={img_height} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>This means...</h3>
                        <p>
                            During my Udemy course, I mastered the Complete Bootstrap & React Bootcamp with hands-on projects. This equipped me to build responsive and dynamic web applications using Bootstrap for styling and layout, and React for interactive user interfaces. Through hands-on projects, I honed my skills in front-end development, enabling me to create modern and engaging web experiences efficiently.
                        </p>
                    </div>
                </div>


                <div className='container-fluid mt-3'>
                    <div className='container-fluid d-flex justify-content-center'>
                        <p style={{ textAlign: 'justify' }}>
                            You can check out the rest of my achievements and studies directly from the platform authorized by Google:
                        </p>
                    </div>

                    <div className='container-fluid d-flex justify-content-center'>
                        <Link href={'https://drive.google.com/drive/folders/1mqcmcatSWcZvqsgDeqab1_c80BcdjgKS?usp=sharing'}>
                            <button type="button" className="btn btn-outline-success">
                                Continue reading on Google Drive
                            </button>
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}
