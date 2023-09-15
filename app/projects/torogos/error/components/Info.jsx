import React from 'react';

export default function Info() {
    const reasons = [
        "Problemas de conexión con el servidor de descarga",
        "Las imagenes .ISO fueron removidas por incompatibilidad o mantenimiento"
    ];
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h3 className='text-center'>
                    Parece que ocurrió un error...
                </h3>
                <div className='d-flex justify-content-center'>
                    <p style={{ textAlign: 'justify' }}>
                        No se encontró ningúna versión descargable de <a href="https://bulssola.vercel.app/projects/torogos" target="_blank" rel="noopener noreferrer">TorogOS</a>, esto se debe a una de las siguientes razones:
                    </p>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <ul>
                        {
                            reasons.map((reason, index) => (
                                <li key={index}>{reason}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className='mt-3'>
                    <p></p>
                </div>
            </div>
        </React.Fragment>
    )
}
