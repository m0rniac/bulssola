import React from 'react';
import Image from 'next/image';

export default function Corpus() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h4 className='text-center'>
                    Pero... ¿Por qué?
                </h4>
            </div>

            <div className='container-fluid mt-3 w-75'>
                <p style={{ textAlign: 'justify' }}>
                    Recordemos que el crecimiento en la producción de plásticos está estrechamente vinculado al aumento de la población y al desarrollo económico. Mi patria, El Salvador, es una hermosa nación tal como se describe en nuestro himno nacional. Sin embargo, lamentablemente nuestros planes integrales de gestión de residuos sólidos dependen en gran medida de la educación, sensibilidad y participación de la población salvadoreña, la cual aún se encuentra en desarrollo. En este contexto, presento esta propuesta, una propuesta en la cual los residuos plásticos de las playas, aceras, canaletas, parques y una larga lista de etcéteras dejen de ser un problema y se conviertan en un recurso.
                </p>
            </div>
        </React.Fragment>
    )
}
