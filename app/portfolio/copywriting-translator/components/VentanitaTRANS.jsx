import React from 'react';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

export default function VentanitaTRANS(
    {
        titulo_doc,
        descripcion_doc,
        lang_original,
        lang_original_link,
        lang_traducido,
        lang_traducido_link,
    }
) {
    return (
        <div className="container mt-3 d-flex justify-content-center">
            <div className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{titulo_doc}</h5>
                    <p className="card-text" style={{ 'textAlign': 'justify' }}>
                        {descripcion_doc}
                        <br />
                    </p>
                    <p>
                        <strong>Original language:</strong> <i>{lang_original}</i>
                        <br />
                        <strong>Translated language:</strong> <i>{lang_traducido}</i>
                    </p>
                    <div className="d-flex justify-content-around mt-3">
                        <Link href={lang_traducido_link} passHref legacyBehavior>
                            <a className="btn btn-primary d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                <FaEye className="mr-2" /> Translated
                            </a>
                        </Link>
                        <Link href={lang_original_link} passHref legacyBehavior>
                            <a className="btn btn-secondary d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                <FaEye className="mr-2" /> Original
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
