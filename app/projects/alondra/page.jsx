import React from 'react';

import Introduction from './components/Introduction';
import Download from './components/Download';
import Faq from './components/Faq';

import Data from "../../data.json";
import "../../../public/css/bootstrap.css"



export const metadata = {
    title: 'Alondra Messenger | m0rniac',
    description: "Anonymous tor messenger",
    keywords: ["bulssola", "bulssola alondra", "bulssola messenger", "m0rniac messenger", "m0rniac alondra", "alondra", "alondra messenger"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logoalondra,
    },
};
export default function page() {
    return (
        <React.Fragment>
            <Introduction />
            <Download LatestVersion='https://drive.google.com/drive/folders/105s5ThlAJ9DJDiM2vZ8z3T6gltsog6z8?usp=sharing'/>
            <Faq />
        </React.Fragment>
    );
};
