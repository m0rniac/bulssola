import React from 'react';
import Image from 'next/image';

export default function Forms() {
    let hipos = [
        "En un reactor de lecho fijo el contenido de alquitranes en el gas final puede ser despresciado.",
        "El tiempo de resistencia de los residuos sólidos en el reactor es suficiente para asumir que el contenido de carbón de los residuos es gasificado."
    ];

    let howToWork = [
        'Combustión de diésel: El proceso comienza con la inyección de combustible diésel en el motor del generador.',
        'Compresión del aire: El motor diésel comprime el aire dentro de los cilindros a una alta presión. Esto aumenta significativamente la temperatura del aire.',
        'Encendido por compresión: A diferencia de los motores de gasolina, los motores diésel no utilizan bujías para encender el combustible. En su lugar, el aire comprimido alcanza temperaturas lo suficientemente altas como para encender el diésel por sí mismo en un proceso conocido como encendido por compresión.',
        'Expansión de gases: Cuando el diésel se enciende, produce una explosión controlada en el cilindro del motor. Esto genera una gran presión y fuerza que empuja un pistón hacia abajo.',
        'Movimiento del pistón: El movimiento descendente del pistón está conectado a un cigüeñal, que convierte el movimiento lineal en movimiento rotativo.',
        'Generación de energía mecánica: El cigüeñal hace girar un eje que está conectado a un alternador (también llamado generador eléctrico). A medida que el eje del alternador gira, genera energía mecánica.',
        'Conversión a energía eléctrica: Dentro del alternador, la energía mecánica se convierte en energía eléctrica mediante la inducción electromagnética. Esto implica la rotación de bobinas de alambre dentro de un campo magnético.',
        'Salida de energía eléctrica: La energía eléctrica generada se transmite a través de cables y conexiones hacia los dispositivos o sistemas que requieren electricidad.',
        'Regulación de la tensión: Los generadores diésel suelen estar equipados con reguladores de tensión para mantener la estabilidad de la corriente eléctrica y garantizar que la tensión esté dentro de los límites aceptables.',
        'Apagado del generador: Una vez que se detiene la demanda de energía eléctrica o cuando se cumple un período de funcionamiento predeterminado, el generador diésel se apaga, deteniendo la inyección de combustible al motor y deteniendo la generación de energía eléctrica.'
    ]
    let uses = [
        'Generación de energía de respaldo: Se utilizan para proporcionar electricidad en caso de cortes de energía eléctrica en instalaciones comerciales, hospitales, industrias, y en situaciones de emergencia.',
        'Generación de energía continua: En algunos lugares donde no es posible conectar a la red eléctrica principal, los generadores diésel pueden proporcionar una fuente constante de energía eléctrica.',
        'Uso en aplicaciones móviles: Se emplean en vehículos recreativos, embarcaciones y maquinaria de construcción, donde se necesita una fuente de energía independiente.',
        'Aplicaciones industriales: En muchas industrias, los generadores diésel se utilizan como fuente de energía primaria o de respaldo para operar equipos y maquinaria.'
    ]
    return (
        <React.Fragment>
            <div className='container mt-5 w-75'>
                { /* [MODELO TERMOQUÍMICO] */}
                <div>
                    <div className='container-fluid'>
                        <h2 className="text-center">Equilibrio termo-químico</h2>
                        <p style={{ textAlign: 'justify' }}>
                            El modelo de gasificación es un enfoque que combina tanto el equilibrio químico como el térmico en la reacción global del proceso de gasificación de combustibles carbonosos en un lecho fijo. Los detalles precisos de esta reacción se describen en las ecuaciones que se presentan a continuación. El propósito fundamental de este modelo es anticipar la composición final del gas de gasificación (GG) y la temperatura resultante de la reacción. A partir de la composición del GG, podemos calcular una serie de parámetros termodinámicos críticos, tales como la eficiencia del proceso de gasificación en frío, el poder calorífico inferior del gas de gasificación y la eficiencia conforme a la segunda ley de la termodinámica.
                        </p>
                    </div>

                    <div>
                        <div className='container-fluid mt-4'>
                            <p className='text-center'>
                                Mediante esta fórmula de sustitución, es factible calcular el peso molecular de la biomasa, la cantidad molar de agua por mol de biomasa, la relación estequiométrica 'combustible-aire', y la energía de formación de la biomasa:
                            </p>
                        </div>

                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_01.png'} width={950} height={45} alt='Fórmula 1 | Christian Castro' />
                        </div>

                        <div className='container-fluid mt-4'>
                            <p className='text-center'>
                                La predicción de los productos de la reacción y la composición de <i>GG</i> está basada en el equilibrio químico entre las diferentes especies, además de considerar las siguientes hipótesis:
                            </p>
                            <ol type='A'>
                                {hipos.map((hipo, index) => (
                                    <li key={index}><strong>{hipo}</strong></li>
                                ))}
                            </ol>
                        </div>

                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_02.png'} width={150} height={25} alt='Fórmula 2 | Christian Castro' />
                        </div>

                        <div className='container-fluid mt-5'>
                            <p style={{ textAlign: 'justify' }}>
                                De esta manera, se descarta la generación de material carbonoso como subproducto, logrando una eficiencia de conversión del carbono del residuo sólido en incineradores que supera el 99%. Para resolver el sistema, se incorporan dos reacciones en equilibrio:
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 d-flex justify-content-center img-fluid'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_03.png'} width={340} height={74} alt='Fórmula 3 | Christian Castro' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <p>
                                En la sección de reducción del gasificador, el hidrógeno se reduce con el material carbonoso para la producción de metano. La constante de equilibrio <i>K</i> establece la relación entre las cantidades molares de las especies involucradas.
                            </p>
                        </div>

                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center img-fluid'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_04.png'} width={400} height={74} alt='Fórmula 4 | Christian Castro' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <p>
                                La segunda reacción auxiliar es la reacción "agua-gas", la cual describe el equilibrio entre el hidrógeno y el monóxido de carbono (CO) en presencia de agua.
                            </p>
                        </div>
                    </div>

                    <div className='container-fluid mt-5'>
                        <p className='text-center'>
                            El <i>GG</i> es modelado como un gas ideal, y el reactor opera a presión atmosférica.
                        </p>
                    </div>
                </div>


                { /* [Eficiencia energética] */}
                <div className='container-fluid mt-5'>
                    <div>
                        <h3 className='text-center'>
                            Eficiencia energética
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            El cálculo de la eficiencia energética (ExE) se define como la relación entre la energía que sale del gasificador (energía del gas de gasificación, GG) y la energía que entra al reactor (energía contenida en la biomasa, humedad y aire):
                        </p>
                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_05.png'} width={750} height={25} alt='Fórmula 5 | Christian Castro' />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p className='text-center'>
                            Dicha energía está compuesta por dos términos (energía química y física):
                        </p>
                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_06.png'} width={250} height={25} alt='Fórmula 6 | Christian Castro' />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <p style={{ textAlign: 'justify' }}>
                            La energía del gas de gasificación (GG) se expone en las siguientes dos ecuaciones; donde 'n' representa el número de moles de cada especie gaseosa del GG, 'E' es la energía estándar de cada especie gaseosa del GG, y 'T' es la temperatura del estado de referencia. La energía de la biomasa puede ser calculada a través del análisis de su contenido final de humedad (fracción másica) y el PCI (Poder Calorífico Inferior) en condiciones de base seca:
                        </p>
                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_07.png'} width={250} height={25} alt='Fórmula 7 | Christian Castro' />
                        </div>
                        <div className='container-fluid d-flex justify-content-center mt-2'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_08.png'} width={250} height={25} alt='Fórmula 8 | Christian Castro' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center'>
                            Por lo tanto la energía de la biomasa húmeda es calculada por medio de las ecuaciones:
                        </p>
                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_09.png'} width={390} height={25} alt='Fórmula 9 | Christian Castro' />
                        </div>
                        <div className='container-fluid d-flex justify-content-center mt-2'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_10.png'} width={390} height={25} alt='Fórmula 10 | Christian Castro' />
                        </div>
                    </div>
                </div>


                { /* [Síntesis] */}
                <div className='container-fluid mt-5'>
                    <div className='container-fluid'>
                        <h2 className='text-center'>
                            En síntesis
                        </h2>
                        <p style={{ textAlign: 'justify' }}>
                            Es posible generar diesel (y derivados inflamables) a partir del plástico en un proceso conocido como pirólisis; la pirólisis es una técnica que implica calentar el plástico a altas temperaturas en ausencia de oxígeno, lo que descompone el plástico en productos químicos más simples (lo explicado anteriormente). Es decir, se calienta el plástico a temperaturas que oscilan entre 300 y 800 grados Celsius y esto rompe las largas cadenas de polímeros del plástico en hidrocarburos más cortos que pueden ser refinados y procesados para obtener diesel u otros combustibles similares.
                        </p>

                        <div className='mt-4'>
                            <h5 className='text-center'>
                                Y ahora... ¿Cómo se obtiene la energía eléctrica?
                            </h5>
                            <p style={{ textAlign: 'justify' }}>
                                Existen generadores de energía eléctrica que funcionan con diesel (y/o sus derivados inflamables), conocidos como generadores diésel o grupos electrógenos diésel. Estos generadores utilizan motores diésel para convertir la energía química contenida en el combustible en energía mecánica que luego se convierte en energía eléctrica a través de un alternador, <strong>y funcionan de la siguiente forma</strong>:
                            </p>
                            <div className='mt-1'>
                                <ul>
                                    {
                                        howToWork.map((h, index) => (
                                            <li key={index}>
                                                <p style={{ textAlign: 'justify' }}>
                                                    {h}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className='mt-5'>
                                <p style={{ textAlign: 'justify' }}>
                                    <strong>Y estos son algunos de los usos que se le podría dar</strong>:
                                </p>

                                <div className='mt-1'>
                                    <ul>
                                        {
                                            uses.map((use, index) => (
                                                <li key={index}>
                                                    <p style={{ textAlign: 'justify' }}>
                                                        {use}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                { /* [Conclusiones] */}
                <div className='mt-5'>
                    <div className='container-fluid mt-5'>
                        <h3 className='text-center'>
                            Conclusiones
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            En esta investigación, el proceso de gasificación simulado se basa en el uso del aire como agente gasificante, siguiendo la práctica común en plantas de Recuperación de Energía a partir de Residuos (RAE). El modelo asume que los reactivos ingresan en condiciones ambientales, con energía física del aire igual a cero. Así, mediante las ecuaciones previamente presentadas, calculamos con precisión la energía del agente oxidante. Esto resulta esencial para evaluar y comprender el rendimiento y la eficiencia del proceso de gasificación en la recuperación de energía a partir de residuos sólidos:
                        </p>

                        <div className='container-fluid d-flex justify-content-center'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_11.png'} width={190} height={25} alt='Fórmula 11 | Christian Castro' />
                        </div>
                        <div className='container-fluid d-flex justify-content-center mt-2'>
                            <Image className='d-block user-select-none img-fluid' src={'/images/articles/post1/form_12.png'} width={290} height={25} alt='Fórmula 12 | Christian Castro' />
                        </div>
                    </div>

                    <div className='container-fluid mt-5'></div>
                </div>

            </div>
        </React.Fragment>
    )
}
