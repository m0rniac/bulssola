import React from 'react'

import Data from "../../../data.json";
import "../../../../public/css/bootstrap.css";

import PullImage from './components/Pull';
import Info from './components/Info';


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
export default function Page() {
    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <PullImage />
            </div>
            <Info />
        </React.Fragment>
    )
}
