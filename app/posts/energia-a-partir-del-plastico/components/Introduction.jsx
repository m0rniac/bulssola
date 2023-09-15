import React from 'react'

export default function Introduction() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h4 className='text-center text-wrap'>
                    Generación de energía eléctrica a partir de los residuos plásticos
                </h4>
            </div>

            <div className='container-fluid mt-2 w-75'>
                <p className='text-start'>
                    <strong>
                        Resúmen:
                    </strong>
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Se exploran enfoques termodinámicos para convertir la energía contenida en los Residuos Sólidos Urbanos (RSU) mediante la incineración en condiciones sub-estequiométricas. El objetivo es evaluar la viabilidad de utilizar los RSU como una alternativa para reducir los impactos ambientales asociados con su disposición final. El análisis se basa en un modelo de equilibrio termoquímico del proceso de gasificación, en el cual se investiga cómo el contenido de humedad y la relación entre el combustible y el aire afectan este proceso termoquímico.
                </p>
            </div>
        </React.Fragment>
    )
}
