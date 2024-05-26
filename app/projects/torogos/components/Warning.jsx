import React from 'react'

export default function Warning() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-3 w-75'>
                <div className="alert alert-dismissible alert-warning">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <h4 className="alert-heading">Warning!</h4>
                    <p className="mb-0">This project is indefinitely inactive, which means it will no longer be available to the public until further notice.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
