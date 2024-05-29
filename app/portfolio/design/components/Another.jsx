import React from 'react'
import Image from 'next/image'

export default function Another() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='container-fluid'>
                    <h4 className='text-start'>
                        Otras tareas que puedo realizar:
                    </h4>
                </div>

                {/* A) Color Splash */}
                <div className='container-fluid mt-4'>
                    <div className='container-fluid'>
                        <div className='container-fluid'>
                            <h5>
                                1. Color Splash
                            </h5>
                        </div>
                        <div className='container-fluid'>
                            <p>
                                Reemplazar el color original de uno o varios objetos por otro completamente diferente de una forma realista, útil para corrección y varianza de contenido.
                            </p>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row mt-5 d-flex justify-content-center align-items-center'>
                            <div className='col-md-6 d-flex justify-content-center order-md-2'>
                                <Image
                                    src={'/images/portfolio/design/another/img_01.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                    alt='Image 01'
                                />
                            </div>
                            <div className='col-md-6 d-flex justify-content-center order-md-1 mt-3 mt-md-0'>
                                <Image
                                    src={'/images/portfolio/design/another/img_02.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                    alt='Image 02'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* B) Generative IA */}
                <div className='container-fluid mt-5'>
                    <div className='container-fluid'>
                        <div className='container-fluid'>
                            <h5>
                                2. Generative IA
                            </h5>
                        </div>
                        <div className='container-fluid'>
                            <p>
                                Creación de diversos escenarios a partir de una única foto de una forma realista, útil para la generación de contenido.
                            </p>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row mt-5 d-flex justify-content-center align-items-center'>
                            <div className='col-md-6 d-flex justify-content-center order-md-2'>
                                <Image
                                    src={'/images/portfolio/design/another/img_03.png'}
                                    width={433}
                                    height={433}
                                    className='img-fluid'
                                    alt='Image 01'
                                />
                            </div>
                            <div className='col-md-6 d-flex justify-content-center order-md-1 mt-3 mt-md-0'>
                                <Image
                                    src={'/images/portfolio/design/another/img_04.png'}
                                    width={533}
                                    height={533}
                                    className='img-fluid'
                                    alt='Image 02'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
