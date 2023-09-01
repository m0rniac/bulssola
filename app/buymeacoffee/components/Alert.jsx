import React from 'react';

export default function Alert() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-4 w-100'>
                <div className="alert alert-dismissible alert-success">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    🐱 Thanks in advance!
                </div>
            </div>
        </React.Fragment>
    );
}
