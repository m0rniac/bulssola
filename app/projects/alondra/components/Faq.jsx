import React from 'react'

export default function Faq() {
    return (
        <React.Fragment>
            <div className='mt-5'>
                <div className='container-fluid d-flex justify-content-center'>
                    <div>
                        <h3 className='text-center'>Preguntas frecuentes (FAQ)</h3>
                        <p className='text-center'>
                            Lista de preguntas más comúnes acerca del proyecto:
                        </p>
                    </div>
                </div>
            </div>

            <div className='container-fluid w-75 mt-4'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <ol>
                            <li>
                                <h5>¿Qué es Alondra y cómo se diferencia de las aplicaciones de mensajería convencionales?</h5>
                                <ul>
                                    <li>
                                        <p style={{ textAlign: 'justify' }}>
                                            Alondra es una plataforma de comunicación diseñada para ofrecer un alto nivel de anonimato y privacidad. Se diferencia de las aplicaciones de mensajería convencionales en que utiliza la red TOR para enrutar las comunicaciones de manera que los usuarios puedan enviar mensajes de texto, archivos multimedia, audios, y realizar llamadas de forma anónima y segura entre sus contactos.
                                        </p>
                                    </li>
                                    <li>
                                        <p style={{ textAlign: 'justify' }}>
                                            A diferencia de aplicaciones populares como Facebook Messenger, WhatsApp y Telegram, Alondra no almacena tus archivos en servidores en línea. En cambio, todos los archivos que compartes a través de Alondra permanecen solo en los dispositivos que participan en la conversación, sin guardar una copia en la nube o en servidores externos.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>¿Puedo usar esta aplicación en cualquier tipo de dispositivo móvil?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    Esta aplicación está disponible para su uso en la mayoría de dispositivos móviles modernos que ejecuten el sistema operativo Android. Esto significa que cualquier persona que tenga un teléfono o tablet Android puede utilizarla sin problemas. Si estás utilizando otro tipo de dispositivo o sistema operativo, lamentablemente, esta aplicación no estará disponible para ti en este momento.
                                </p>
                            </li>
                            <li>
                                <h5>¿Es una aplicación segura?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    Esta aplicación es altamente segura para todos los usuarios, ya que incorpora múltiples mecanismos de seguridad diseñados para prevenir la filtración de información, los cuales están detallados en la documentación. Además, todos los archivos .APK disponibles para descarga en este sitio han sido firmados digitalmente con la clave JKS del desarrollador. Se recomienda enfáticamente que no instales ninguna versión de la aplicación que no haya sido descargada directamente desde este sitio oficial
                                </p>
                            </li>
                            <li>
                                <h5>¿Cómo funciona la red TOR en Alondra y por qué se utiliza para garantizar el anonimato?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    La red TOR, abreviatura de "The Onion Router", funciona mediante la retransmisión de datos a través de una serie de servidores enrutados de manera aleatoria. Esto oculta la ubicación del remitente y el destinatario, lo que garantiza un alto grado de anonimato y privacidad.
                                </p>
                            </li>
                            <li>
                                <h5>¿Es necesario configurar la aplicación para funcionar correctamente?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    No, la aplicación se encarga de la configuración de la red TOR automáticamente, por lo que los usuarios no necesitan realizar ninguna configuración especial. Sin embargo, puedes reforzar la privacidad añadiendo Bridges de TOR, modificando elementos de la configuración por defecto y establecer una privacidad customizada, esto es opcional y se recomienda hacer solo si posees el conocimiento necesario.
                                </p>
                            </li>
                            <li>
                                <h5>¿Por qué existe Alondra Messenger?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    Inspirado en la filosofía de <a href="https://tails.net/index.es.html" target="_blank" rel="noopener noreferrer">Tails Linux</a>. Este proyecto se enfoca en proporcionar una herramienta de comunicación segura y confidencial para personas que han sobrevivido a situaciones de violencia doméstica, periodistas que necesitan proteger sus fuentes, y cualquier persona que esté en entornos donde la privacidad y la seguridad son especialmente importantes.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
