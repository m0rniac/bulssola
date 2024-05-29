import React from 'react';
import Image from 'next/image';

export default function Cards() {
    return (
        <React.Fragment>
            <br />
            <br />
            <br />
            <div className='container mt-4 w-75'>
                <hr />
                <div className='container-fluid'>
                    <h2 className='text-center'>
                        What areas?
                    </h2>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                        <Image src={'/images/images/image16.svg'} width={250} height={250} alt='Software Dev | @bulssola' />
                    </div>
                    <div className='col-md-6 mt-4 order-md-1'>
                        <h3>Related to Software Development</h3>
                        <p>
                            My passion lies in customer satisfaction through the creation of problem-solving software. I understand the critical importance of development in the functioning and competitiveness of companies today, which is why I have the ability to analyze user needs, design efficient solutions, write clean code, and conduct thorough testing to ensure the quality of the software I develop. My goal is to be part of a dynamic team where I can apply my technical and creative skills to contribute to the company's success. I am constantly updating myself with the latest trends and technologies in the field to stay up-to-date and adapt quickly to changes.
                        </p>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-center'>
                            <Image src={'/images/images/image28.svg'} width={250} height={250} alt='Traductor | @bulssola' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>Related to Translation</h3>
                        <p>
                            My passion lies in customer satisfaction through the creation of accurate and culturally appropriate translations. I understand the critical importance of translation in effective communication and the competitiveness of companies in the global market. Therefore, I have the ability to analyze user needs, design efficient solutions, and deliver clear and precise translations.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}
