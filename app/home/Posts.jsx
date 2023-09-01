import React from 'react';
import Link from 'next/link';

export function NewPost({
    PostLink = '/',
    Title = 'Title of post',
    Text = 'Text of post',
    Date = "dd/mm/yy",
    Author = 'By: Bulssola (m0rniac)'
}) {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5 w-75'>
                <h4>Latest projects:</h4>
            </div>

            <div className='container-fluid mt-5 w-75'>
                <div className="list-group">
                    <Link className='list-group-item list-group-item-action flex-column align-items-start active' href={PostLink}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{Title}</h5>
                            <small>{Date}</small>
                        </div>
                        <p className="mb-1">{Text}</p>
                        <small>{Author}</small>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export function PrevPost({
    PostLink = '/',
    Title = 'Title of post',
    Text = 'Text of post',
    Date = "dd/mm/yy",
    Author = 'By: Bulssola (m0rniac)'
}) {
    return (
        <React.Fragment>
            <div className='container-fluid mt-3 w-75'>
                <div className='list-group'>
                    <Link className="list-group-item list-group-item-action flex-column align-items-start" href={PostLink}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{Title}</h5>
                            <small className="text-muted">{Date}</small>
                        </div>
                        <p className="mb-1">{Text}</p>
                        <small className="text-muted">{Author}</small>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};