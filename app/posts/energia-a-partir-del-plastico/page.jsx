import React from 'react';

import "../../../public/css/bootstrap.css";

import Status from './components/Status';
import Introduction from './components/Introduction';
import Corpus from './components/Corpus';
import Forms from './components/Forms';

export default function Page() {
    return (
        <React.Fragment>
            <Status Status={'Artículo terminado'} />
            <Introduction />

            <div className='container-fluid mt-5'>
                <Corpus />
            </div>

            <Forms />
        </React.Fragment>
    );
};
