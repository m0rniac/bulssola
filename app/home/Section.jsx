import React from 'react';
import Image from 'next/image';

import Data from "../data.json";
import "./logo.css";

export default function Section() {
    return (
        <React.Fragment>
            {/* [Corpus; Logotype] */}
            <div className='container-fluid mt-5 d-flex justify-content-center image-logo'>
                <Image className='image-logo' src={Data.me} width={260} height={260} alt='Christian Castro | @bulssola' />
            </div>

            {/* [Corpus; Introduction] */}
            <div className='container-fluid mt-3'>
                <h2 className='text-center'>
                    Christian Castro
                </h2>
                <p className='text-muted text-center'>
                    @bulssola - m0rniac
                </p>
            </div>

            {/* [Corpus; Quote] */}
            <div className='container-fluid mt-5'>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            "The only way to do great work is to love what you do"
                        </p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Steve Jobs, co-founder of <cite title="Apple Inc.">Apple Inc.</cite>
                    </figcaption>
                </figure>
            </div>
        </React.Fragment>
    );
};
