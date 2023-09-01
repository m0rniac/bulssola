import React from 'react'
import Link from 'next/link'

export default function Download({
    LatestVersion="",
    Community=""
}) {
    return (
        <React.Fragment>
            <div className='container-fluid d-flex justify-content-center mt-4'>
                <Link href={LatestVersion} target='_blank'><button type='button' className='btn btn-primary'>Descargar última versión</button></Link>
                <Link href={Community} target='_blank'><button type='button' className='btn btn-light'>Comunidad (en GitHub)</button></Link>
            </div>

            <div className='container-fluid mt-4 w-50'>
                <hr />
            </div>
        </React.Fragment>
    )
}
