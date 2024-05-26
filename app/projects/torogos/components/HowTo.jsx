import React from 'react';

export default function HowTo() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h3 className='text-center'>
                    How to install TorogOS?
                </h3>
            </div>

            <div className='container-fluid mt-3 w-75'>
                <ul>
                    <li key={'ex01'}>
                        <p>
                            Download the <a href="#top">latest version</a> of the operating system.
                        </p>
                    </li>
                    <li key={'ex02'}>
                        <p>
                            Mount the .ISO on a USB drive using <a href="https://rufus.ie/en/" target="_blank" rel="noopener noreferrer">Rufus (on Windows)</a>, or <a href="https://etcher.balena.io/" target="_blank" rel="noopener noreferrer">Balena Etcher (on Linux)</a>.
                        </p>
                    </li>
                    <li key={'ex03'}>
                        <p>
                            Restart the machine, and during the reboot process, press your computer's boot management key, then select the USB drive.
                        </p>
                    </li>
                    <li key={'ex04'}>
                        <p>
                            The live version of the system will automatically run. Press the key combination <code>$MOD + D</code> and enter the command <code>minstall-launcher</code> in the search bar, which will launch the system installer.
                        </p>
                    </li>
                    <li key={'ex05'}>
                        <p>
                            Fill in all the fields and wait for the installation to complete.
                        </p>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
