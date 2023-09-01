import React from 'react'

export default function HowTo() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h3 className='text-center'>
                    ¿Cómo se instala TorogOS?
                </h3>
            </div>

            <div className='container-fluid mt-3 w-75'>
                <ul>
                    <li key={'ex01'}>
                        <p>
                            Descargar la <a href="#top">última versión</a> del sistema operativo.
                        </p>
                    </li>
                    <li key={'ex02'}>
                        <p>
                            Montar el .ISO en una memoria USB usando <a href="https://rufus.ie/en/" target="_blank" rel="noopener noreferrer">Rufus (en Windows)</a>, o <a href="https://etcher.balena.io/" target="_blank" rel="noopener noreferrer">Balena Etcher (en Linux)</a>
                        </p>
                    </li>
                    <li key={'ex03'}>
                        <p>
                            Reiniciar la máquina, y en medio del proceso de re-encendido oprimir la tecla de gestión de arranque de tu computadora, seleccionar la memoria USB.
                        </p>
                    </li>
                    <li key={'ex04'}>
                        <p>
                            Automaticamente se ejecutará la versión live del sistema. Presiona la combinación de teclas <code>$MOD + D</code> e introducir el comando <code>minstall-launcher</code> en la barra de búsqueda, con esto se ejecutará el instalador del sistema.
                        </p>
                    </li>
                    <li key={'ex05'}>
                        <p>
                            Rellenar todos los campos y esperar a que la instalación finalice.
                        </p>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
