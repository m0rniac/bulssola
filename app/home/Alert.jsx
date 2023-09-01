import React from 'react';

export default function Alert() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-3'>
                <div className="alert alert-dismissible alert-light">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>Hi there!</strong> You can use the navigation bar to scroll easily.
                </div>
            </div>
        </React.Fragment>
    );
};
