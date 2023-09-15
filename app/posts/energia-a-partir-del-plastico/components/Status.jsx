import React from 'react'

export default function Status({ Status }) {
    return (
        <React.Fragment>
            <div className='container-fluid mt-4 d-flex justify-content-center'>
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <p className='text-center'></p>
                        <strong className="me-auto">Estado del artículo</strong>
                        <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="toast-body">
                        <p className='text-center'>
                            <strong>
                                {Status}
                            </strong>
                        </p>
                    </div>
                </div>
            </div>


            <div className='container-fluid mt-5'>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            Por favor, abstente de una opinión hasta finalizar la lectura
                        </p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Artículo escrito por Christian Castro.
                    </figcaption>
                </figure>
            </div>


        </React.Fragment>
    )
}
