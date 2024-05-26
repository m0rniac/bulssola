import React from 'react';
import Image from 'next/image';

export default function Why() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <h2 className='text-center'>
                    Why install TorogOS?
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
                                    <h4 className="card-title text-center"><strong>Why is it optimal?</strong></h4>
                                    <ul>
                                        <li key={'li01'}>
                                            <p>
                                                <strong>Preempt-RT:</strong> Includes a patch that provides enhanced real-time capabilities, which is especially beneficial for time-sensitive applications such as real-time control systems, real-time audio and video, where a quick and predictable system response is required.
                                            </p>
                                        </li>
                                        <li key={'li02'}>
                                            <p>
                                                <strong>Low Latency Control:</strong> Introduces the Low-Latency Input Output (LLIO) queue, which reduces system latency by improving how input and output interrupts are handled. This is useful for tasks requiring smooth and responsive interaction with input, output, and MIDI controllers.
                                            </p>
                                        </li>
                                        <li key={'li03'}>
                                            <p>
                                                <strong>Advanced Task Scheduler:</strong> Its kernel features a more advanced task scheduler that improves resource allocation and process scheduling in the system, leading to better utilization of CPU cores and a fairer distribution of CPU time among processes. A faster response to system requests.
                                            </p>
                                        </li>
                                        <li key={'li04'}>
                                            <p>
                                                <strong>Faster Boot Times:</strong> By using techniques like parallelization of startup tasks and optimization of the initialization process, the system can boot faster, which is especially useful in environments where system startup time is critical, such as servers and embedded systems.
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
                                    <h4 className="card-title text-center"><strong>Why is it secure?</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                <strong>Regular Security Updates:</strong> Regular security updates are provided for core packages, allowing users to keep their systems up to date and protected against the latest threats.
                                            </p>
                                        </li>
                                        <li key={'li002'}>
                                            <p>
                                                <strong>Advanced Package Tool:</strong> Uses the APT (Advanced Package Tool) package management, which provides a secure and reliable mechanism for installing, updating, and removing software, also verifies digital signatures ensuring the integrity and authenticity of downloaded packages.
                                            </p>
                                        </li>
                                        <li key={'li003'}>
                                            <p>
                                                <strong>Open Source Focus:</strong> TorogOS, like Debian, is based on open source software, allowing the community of developers and security experts to examine the source code for potential security issues, facilitating early detection of vulnerabilities and collaboration in problem-solving.
                                            </p>
                                        </li>
                                        <p className='mt-5'>
                                            Remember that system security also depends on user security practices, such as applying regular updates, properly configuring the system, and using strong passwords.
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
                                    <h4 className="card-title text-center"><strong>How compatible is it?</strong></h4>
                                    <ul>
                                        <li key={'li0001'}>
                                            <p>
                                                <strong>TorogOS</strong> is a highly compatible distribution with various hardware architectures and offers a wide range of installable/modifiable software, its focus is on stability and security making it a popular choice for servers and critical environments.
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
                                    <h4 className="card-title text-center"><strong>Is it comfortable?</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                The system can provide a flexible environment, as it is developed for quick use via the keyboard. It incorporates a minimalist and configurable user interface that allows precise control over windows and workspace management <a href="http://i3wm.org" target="_blank" rel="noopener noreferrer">(i3-wm)</a>.
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
                                    <h4 className="card-title text-center"><strong>Is it a supported distribution?</strong></h4>
                                    <ul>
                                        <li key={'li0001'}>
                                            <p>
                                                The <a href="http://github.com/m0rniac/torogoslinux" target="_blank" rel="noopener noreferrer">community on GitHub</a> is open to developers looking to provide support, however, TorogOS, being an officially supported distribution by a single person, makes it a robust operating system but also a distribution with an irregular release cycle.
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
                                    <h4 className="card-title text-center"><strong>Its focus</strong></h4>
                                    <ul>
                                        <li key={'li001'}>
                                            <p>
                                                The system is designed with resource maximization and bloatware elimination in mind. Ideal for developers, engineers, auditors, and portable environments.
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
