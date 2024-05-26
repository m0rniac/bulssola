import React from 'react';
import Image from 'next/image';

import Data from "../../data.json";


export default function Init() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <br /><br />
                <div className='d-flex justify-content-center'>
                    <Image src={Data.logo} width={220} height={220} alt='@bulssola' />
                </div>
            </div>

            <div className='container-fluid'>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            "Never stop learning."
                        </p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Benjamin Franklin, <cite title="Founding Father">Founding Father</cite>
                    </figcaption>
                </figure>
            </div>
        </React.Fragment>
    );
};
