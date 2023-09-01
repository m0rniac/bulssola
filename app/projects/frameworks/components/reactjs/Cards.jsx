import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function NewCard({
    Tittle = "Project Title",
    SubTitle = "Technologies used at project",
    ImageRoute = "",
    Description = "",
    GitHubRepo = "",
    Date = "DD-MM-YYYY"
}) {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <strong>
                                {Tittle}
                            </strong>
                        </h5>
                        <h6 className="card-subtitle text-muted">{SubTitle}</h6>
                    </div>

                    <div className='container-fluid d-flex justify-content-center mt-2'>
                        <Image src={ImageRoute} width={1024} height={768} alt='Screenshot | @bulssola' className='d-block user-select-none img-fluid' />
                    </div>

                    <div className="card-body">
                        <p className="card-text">
                            {Description}
                        </p>
                    </div>
                    <div className="card-body">
                        <Link href={GitHubRepo} target='_blank'>See GitHub repository</Link>
                    </div>
                    <div className="card-footer text-muted">
                        {Date}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
