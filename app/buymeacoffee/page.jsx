import React from 'react';

import "../../public/css/bootstrap.css";
import Data from "../data.json";

import Alert from "./components/Alert";
import Section from './components/Section';
import {
    PayPalButton,
    BuyMeACoffeeButton
} from './components/Buttons';


export const metadata = {
    title: 'Buy me a ☕ | Christian Castro',
    description: "Contact me using any link from here",
    keywords: ["bulssola", "bulssola contact", "bulssola contacto", "bulssola instagram", "bulssola telegram", "bulssola whatsapp"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.coffee,
    },
};
export default function Page() {
    return (
        <React.Fragment>
            <Alert />
            <Section />
            <div className='d-flex justify-content-center'>
                <PayPalButton />
                {/*<BuyMeACoffeeButton />*/}
            </div>
        </React.Fragment>
    )
}
