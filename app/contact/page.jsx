import React from 'react';

import Data from "../data.json";
import "../../public/css/bootstrap.css";

import Alert from './components/Alert';
import Section from './components/Section';
import SM from './components/SM';
import Cards from './components/Cards';


export const metadata = {
    title: 'Contact | Christian Castro',
    description: "Contact me using any link from here",
    keywords: ["bulssola", "bulssola contact", "bulssola contacto", "bulssola instagram", "bulssola telegram", "bulssola whatsapp"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.contact,
    },
};
export default function Contact() {
    return (
        <React.Fragment>
            <Section />
            <SM/>
            <Alert/>
            <Cards/>
        </React.Fragment>
    )
}
