import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Linkedin() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-4'>

                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <h3>
                        If you need more information...
                    </h3>
                </div>

                <div className='container-fluid d-flex justify-content-center'>
                    <p>
                        You can check my profile:
                    </p>
                </div>

                <div className='d-flex justify-content-center'>
                    <Link href="https://linkedin.com/in/christcastr/" passHref legacyBehavior>
                        <a target="_blank" className="text-primary">
                            <FaLinkedin size={82} /> Linkedin
                        </a>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
