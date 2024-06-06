import React from 'react';
import Image from 'next/image';

import VentanitaTRANS from './VentanitaTRANS';


export default function TablesSection() {
    return (
        <React.Fragment>
            <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="row w-100 d-flex justify-content-center">
                    <div className="col-md-5 text-center">
                        <h2>
                            Traductions:
                        </h2>
                        <div className='container-fluid'>
                            <VentanitaTRANS
                                titulo_doc="Tras la pandemia, no podemos volver a dormirnos"
                                descripcion_doc="David Graeber's essay argues against a society that exploits the majority for the wealthy few, and sees the COVID-19 pandemic as an opportunity to create a more equitable future."
                                lang_original="Spanish"
                                lang_original_link="https://mega.nz/file/kM5wgDZS#5X2CUeMjPF8D5Bg1j9wh2raIjAlZ1VgDFb913kfRH1U"
                                lang_traducido="English"
                                lang_traducido_link="https://mega.nz/file/IQJiACzS#6BwUnIHDtL5XKJ7WtXZZvCnncgttwL9NF8lZrAyO0aw"
                            />
                        </div>
                    </div>
                    <div className="col-md-5 text-center mt-5">
                        <h2>
                            Copywriting:
                        </h2>
                        <div className='container-fluid'>
                            <Image src={'/images/what_01.svg'} width={220} height={220}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
