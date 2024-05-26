import React from 'react';

import Data from "../data.json";
import "../../public/css/bootstrap.css";

import Init from './components/init';
import MostGoogle from './components/MostGoogle';
import MostMIT from './components/MostMIT';
import MostUdemy from "./components/MostUdemy";
import Linkedin from './components/Linkedin';



export const metadata = {
    title: 'My Studies | Christian Castro',
    description: "List of all my studies",
    keywords: ["bulssola", "bulssola studies", "bulssola study", "bulssola instagram", "bulssola telegram", "bulssola whatsapp"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logo,
    },
};
export default function Studies() {
    return (
        <React.Fragment>
            <Init />
            <MostGoogle />
            <MostMIT />
            <MostUdemy />
            <Linkedin />
        </React.Fragment>
    )
}
