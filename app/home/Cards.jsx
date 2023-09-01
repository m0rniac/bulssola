import React from 'react';
import Image from 'next/image';

export default function Cards() {
    return (
        <React.Fragment>
            <div className='container mt-5 w-75'>
                <hr />
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/images/images/image02.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>Welcome</h3>
                        <p>
                            To my web portfolio, a window to my creative and professional world where my projects, skills, and achievements stand out. I invite you to explore my professional and educational journey, where you'll discover my work experience in different industries, highlighting the roles and responsibilities I have acquired throughout my career. You'll also find my academic background, certifications, and relevant courses that have allowed me to acquire and develop key skills in my field.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Image src={'/images/images/image08.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>What is this for?</h3>
                        <p>
                            My purpose is to effectively present my experience, skills, and achievements in a digital format. It serves as a central tool to showcase my work and potential in my professional field, as well as an opportunity to connect and open doors to potential collaborations and job opportunities.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/images/images/image07.svg'} width={250} height={250} alt='Loading... | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>With common interests</h3>
                        <p>
                            Visitors can get in touch with me directly to discuss projects, explore opportunities for collaboration, or simply share their feedback and questions. You'll find the respective contact methods in the navigation bar.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}
