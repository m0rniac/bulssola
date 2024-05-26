import React from 'react'

export default function Faq() {
    return (
        <React.Fragment>
            <div className='mt-5'>
                <div className='container-fluid d-flex justify-content-center'>
                    <div>
                        <h3 className='text-center'>Frequently Asked Questions (FAQ)</h3>
                        <p className='text-center'>
                            List of common questions about the project:
                        </p>
                    </div>
                </div>
            </div>

            <div className='container-fluid w-75 mt-4'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <ol>
                            <li>
                                <h5>What is Alondra and how is it different from conventional messaging apps?</h5>
                                <ul>
                                    <li>
                                        <p style={{ textAlign: 'justify' }}>
                                            Alondra is a communication platform designed to offer a high level of anonymity and privacy. It differs from conventional messaging apps in that it uses the TOR network to route communications so that users can send text messages, multimedia files, audios, and make calls anonymously and securely between their contacts.
                                        </p>
                                    </li>
                                    <li>
                                        <p style={{ textAlign: 'justify' }}>
                                            Unlike popular apps like Facebook Messenger, WhatsApp, and Telegram, Alondra does not store your files on online servers. Instead, all the files you share through Alondra remain only on the devices participating in the conversation, without saving a copy in the cloud or on external servers.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>Can I use this app on any type of mobile device?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    This app is available for use on most modern mobile devices running the Android operating system. This means that anyone with an Android phone or tablet can use it without any issues. If you are using another type of device or operating system, unfortunately, this app will not be available for you at this time.
                                </p>
                            </li>
                            <li>
                                <h5>Is it a secure app?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    This app is highly secure for all users, as it incorporates multiple security mechanisms designed to prevent information leaks, which are detailed in the documentation. Additionally, all .APK files available for download on this site have been digitally signed with the developer's JKS key. It is strongly recommended that you do not install any version of the app that has not been downloaded directly from this official site.
                                </p>
                            </li>
                            <li>
                                <h5>How does the TOR network work in Alondra and why is it used to ensure anonymity?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    The TOR network, short for "The Onion Router", works by relaying data through a series of randomly routed servers. This hides the location of the sender and the recipient, ensuring a high degree of anonymity and privacy.
                                </p>
                            </li>
                            <li>
                                <h5>Is it necessary to configure the app to work properly?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    No, the app automatically handles the configuration of the TOR network, so users do not need to perform any special configuration. However, you can enhance privacy by adding TOR Bridges, modifying default settings, and establishing customized privacy settings. This is optional and recommended only if you have the necessary knowledge.
                                </p>
                            </li>
                            <li>
                                <h5>Why does Alondra Messenger exist?</h5>
                                <p style={{ textAlign: 'justify' }}>
                                    Inspired by the philosophy of <a href="https://tails.net/index.en.html" target="_blank" rel="noopener noreferrer">Tails Linux</a>. This project focuses on providing a secure and confidential communication tool for people who have survived domestic violence situations, journalists who need to protect their sources, and anyone in environments where privacy and security are especially important.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
