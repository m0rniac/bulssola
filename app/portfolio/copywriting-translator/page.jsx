import React from 'react'

import Introduction from './components/Introduction';
import TablesSection from './components/TablesSection';




export const metadata = {
    title: 'Translator & CW | Christian Castro',
    description: "List of some of my translator & copywriting projects/works",
    keywords: ["bulssola", "bulssola copywriting", "bulssola translator"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: "/images/portfolio/cw-trans/init_01.svg",
    },
};
export default function page() {
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <Introduction />
                <TablesSection />
            </div>
        </React.Fragment>
    )
}
