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
                            <VentanitaTRANS
                                titulo_doc="Text in Relation to the Summonsfor the Inflammatory Parcel That Was Sent to Berlusconi"
                                descripcion_doc="The play delves into the judicial summons of Christos Tsakalos and Giorgos Nikolopoulos for an alleged criminal act against Silvio Berlusconi, revealing the transnational collaboration between Italian and Greek authorities in the pursuit of individuals considered anarchists."
                                lang_original="English"
                                lang_original_link="https://mega.nz/file/EEZCSDJL#kFz-ixuQW0v4zu5lA1RFMIHIOHF2pwi2L-ByBjzbOUY"
                                lang_traducido="Spanish"
                                lang_traducido_link="https://mega.nz/file/AcRBATAb#Ye-waoHCsEp1FiLngSJ5IGmiMicTn7EpvfWnRfZsvoQ"
                            />
                            <VentanitaTRANS
                                titulo_doc="No-No-No"
                                descripcion_doc="The text challenges activists to analyze immigration policies beyond emotional appeals, highlighting the link between immigration and labor exploitation. It emphasizes the harsh realities immigrants face, contrasting the perception of immigration with tourism and the pressures of seeking a better life while sacrificing personal desires and enduring uncertainty."
                                lang_original="English"
                                lang_original_link="https://mega.nz/file/RAxAQLpD#IXTVfTclS65Arn70-IMZ4hcojswB_vNDXkkdMT2XGtk"
                                lang_traducido="Spanish"
                                lang_traducido_link="https://mega.nz/file/FFY2gBIA#eouXTRhFhc5EZJcHdo5z-Y1cHX3TE09IJkFTmyUOruQ"
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
