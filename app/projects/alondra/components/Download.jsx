import React from 'react';
import Link from 'next/link';

export default function Download({
    LatestVersion = "",
    Community = ""
}) {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='container-fluid d-flex justify-content-center mt-2'>
                    <Link href={LatestVersion} target='_blank'>
                        <button type='button' className='btn btn-primary'>Download Latest Version</button>
                    </Link>
                    <Link href={Community} target='_blank'>
                        <button type='button' className='btn btn-light'>Documentation (in development)</button>
                    </Link>
                </div>

                <div className='container-fluid mt-4 w-50'>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    );
}
