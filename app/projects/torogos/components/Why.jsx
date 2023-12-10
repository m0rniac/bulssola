import React from 'react';
import Image from 'next/image';

export default function Why() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h2 className='text-center'>
                    ¿Por qué instalar TorogOS?
                </h2>

                {/* [Corpus; Cards] */}
                <div className='container-fluid w-75'>
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/images/posts/torogos/guide01.svg'} width={300} height={300} alt='Guide 1 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className="card border-primary mb-3" >
                                <div className="card-header text-center"><strong>1/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>¿Por qué es óptimo?</strong></h4>
                                    <ul>
                                        <li key={'li01'}>
                                            <p>
                                                <strong>Preempt-RT:</strong> Incluye un parche que proporciona capacidades de tiempo real mejoradas, esto es especialmente beneficioso para aplicaciones sensibles al tiempo, como sistemas de control en tiempo real, audio y video en tiempo real, donde se requiere una respuesta rápida y predecible del sistema.
                                            </p>
                                        </li>
                                        <li key={'li02'}>
                                            <p>
                                                <strong>Control de baja latencia:</strong> Se introduce la cola de entrada de bajo retardo (LLIO), que reduce la latencia del sistema al mejorar la forma en que se manejan las interrupciones de entrada y salida. Esto es útil para tareas que requieren una interacción fluida y receptiva con dispositivos de entrada, salida y controladores MIDI.
                                            </p>
                                        </li>
                                        <li key={'li03'}>
                                            <p>
                                                <strong>Planificador de tareas avanzado:</strong> Su kernel presenta un planificador de tareas más avanzado que mejora la asignación de recursos y la programación de procesos en el sistema, esto conduce a una mejor utilización de los núcleos de CPU y una distribución más equitativa del tiempo de CPU entre los procesos. Una respuesta más rápida a las solicitudes del sistema.
                                            </p>
                                        </li>
                                        <li key={'li04'}>
                                            <p>
                                                <strong>Tiempos de inicio más rápidos:</strong> Mediante el uso de técnicas como la paralelización de tareas de inicio y la optimización del proceso de inicialización el sistema puede arrancar más rápidamente, lo que es especialmente útil en entornos donde el tiempo de inicio del sistema es crítico, como servidores y sistemas embebidos.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/images/posts/torogos/guide02.svg'} width={250} height={250} alt='Guide 2 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <div className="card border-warning mb-3" >
                                <div className="card-header text-center"><strong>2/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>¿Por qué es seguro?</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                <strong>Actualizaciones de seguridad regulares:</strong>  Se proporcionan actualizaciones regulares de seguridad para los paquetes principales, lo que permite a los usuarios mantener sus sistemas actualizados y protegidos contra las últimas amenazas.
                                            </p>
                                        </li>
                                        <li key={'li002'}>
                                            <p>
                                                <strong>Advanced Package Tool:</strong> Se utiliza la administración de paquetes APT (Advanced Package Tool), que proporciona un mecanismo seguro y confiable para la instalación, actualización y eliminación de software, también verifica las firmas digitales garantizando la integridad y autenticidad de los paquetes descargados.
                                            </p>
                                        </li>
                                        <li key={'li003'}>
                                            <p>
                                                <strong>Enfoque en el código abierto:</strong> TorogOS al igual que Debian se basan en software de código abierto, lo que permite a la comunidad de desarrolladores y expertos en seguridad examinar el código fuente en busca de posibles problemas de seguridad, esto facilita la detección temprana de vulnerabilidades y la colaboración en la solución de problemas.
                                            </p>
                                        </li>
                                        <p className='mt-5'>
                                            Recuerda que la seguridad de un sistema también depende de las prácticas de seguridad del usuario, como aplicar actualizaciones regulares, configurar adecuadamente el sistema y utilizar contraseñas seguras.
                                        </p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/images/posts/torogos/guide03.svg'} width={300} height={300} alt='Guide 3 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className="card border-dark mb-3" >
                                <div className="card-header text-center"><strong>3/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>¿Qué tan compatible es?</strong></h4>
                                    <ul>
                                        <li key={'li0001'}>
                                            <p>
                                                <strong>TorogOS</strong> es una distribución altamente compatible con diversas arquitecturas de hardware y ofrece una amplica gama de software instalable/modificable, su enfoque es la estabilidad y la seguridad en una elección popular para servidores y entornos críticos.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/images/posts/torogos/guide04.svg'} width={250} height={250} alt='Guide 2 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <div className="card border-info mb-3" >
                                <div className="card-header text-center"><strong>4/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>¿Es confortable?</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                El sistema puede brindar un entorno flexible, ya que está desarrollado para el uso rápido mediante el teclado. Incorpora una interfaz de usuario minimalista y configurable que permite un control preciso sobre las ventanas y el manejo de espacios de trabajo <a href="http://i3wm.org" target="_blank" rel="noopener noreferrer">(i3-wm)</a>.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/images/posts/torogos/guide05.svg'} width={300} height={300} alt='Guide 3 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className="card border-success mb-3" >
                                <div className="card-header text-center"><strong>5/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>¿Es una distribución atendida?</strong></h4>
                                    <ul>
                                        <li key={'li0001'}>
                                            <p>
                                                La <a href="http://github.com/m0rniac/torogoslinux" target="_blank" rel="noopener noreferrer">comunidad en GitHub</a> está abierta a los desarrolladores que busquen aportar soporte, sin embargo, TorogOS, al ser una distribución atendida oficialmente por una sola persona la convierte en un sistema operativo robusto pero tambien en una distribución con ciclo de lanzamiento no regular.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/images/posts/torogos/guide06.svg'} width={250} height={250} alt='Guide 2 | TorogOS Linux' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <div className="card border-danger mb-3" >
                                <div className="card-header text-center"><strong>6/6</strong></div>
                                <div className="card-body">
                                    <h4 className="card-title text-center"><strong>Su enfoque</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                El sistema está creado pensando en la maximización de recursos y la eliminación de software innecesario (bloatware). Ideal para desarrolladores, ingenieros, auditores y entornos portátiles.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
