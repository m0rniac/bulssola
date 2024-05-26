import React from 'react';

import Data from "../../data.json";
import "../../../public/css/bootstrap.css";

import Warning from './components/Warning';
import Introduction from './components/Introduction';
import Download from './components/Download';
import Why from './components/Why';
import HowTo from './components/HowTo';

export const metadata = {
    title: 'TorogOS Linux | m0rniac',
    description: "TorogOS Linux: Un sistema operativo completamente libre enfocado en la maximización de recursos y en la eliminación de bloatware",
    keywords: ["torogoslinux", "torogos linux", "bulssola torogos linux", "bulssola linux", "bulssola torogos github", "bulssola projects", "linux salvadoreño", "salvadorean linux"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logotorogos,
    },
};
export default function LinuxTorogOS() {
    return (
        <React.Fragment>
            <div className='torogos-section'>
                <Warning />
                <Introduction />
                <Download
                    Community='https://github.com/m0rniac/torogos-linux/issues'
                    LatestVersion='https://drive.google.com/drive/folders/1_ZkcwXtFr8W7AV1h6k433ggHHa_xGyW0?usp=sharing'
                />
                <Why />
                <HowTo />
            </div>
        </React.Fragment>
    );
};
