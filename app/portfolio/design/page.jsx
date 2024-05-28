import React from 'react'

import Introduction from './components/Introduction'
import Gallery from './components/Gallery'
import End from './components/End';

export const metadata = {
    title: 'Design Portfolio | Christian Castro',
    description: "List of some of my design-related projects",
    keywords: ["bulssola", "bulssola design", "bulssola diseño"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: "/images/portfolio/design/init_02.svg",
    },
};
export default function page() {
    /* Image routes definition */
    /* 1) LOGOS (Lyrics) */
    const logo_lyrics = [
        {
            src: "/images/portfolio/design/lyrics/img_01.jpg",
            width: 512,
            height: 512,
            tags: [
                { value: "Fénix Studios", title: "Fénix Studios" },
            ],
            alt: "Loading...",
            caption: "'I need a logo that describes the essence of my photography company, something minimalist but at the same time bold, with blue colors and fire but in an animated 3D form'."
        },
        {
            src: "/images/portfolio/design/lyrics/img_02.png",
            width: 512,
            height: 512,
            tags: [
                { value: "iMagination", title: "iMagination" },
            ],
            alt: "Loading...",
            caption: "'We need an illustrative and memorable logo, so to speak, with the letter I and with a range of creative colors'."
        },
        {
            src: "/images/portfolio/design/lyrics/img_03.png",
            width: 512,
            height: 512,
            tags: [
                { value: "AuroraDEV", title: "AuroraDEV" },
            ],
            alt: "Loading...",
            caption: "'I am a developer and passionate about Linux, I need a very minimalist and easy-to-remember logo with my initial'."
        },
    ];

    /* 2) LOGOS (Entrepreneur) */
    const logo_entrepreneur = [
        {
            src: "/images/portfolio/design/business/img_01.png",
            width: 512,
            height: 512,
            tags: [
                { value: "Felina's Food", title: "Felina's Food" },
            ],
            alt: "Loading...",
            caption: "'My company is about vegan and healthy food for cats, I want a logo that represents that essence and it must have a cat'."
        },
        {
            src: "/images/portfolio/design/business/img_04.png",
            width: 512,
            height: 512,
            tags: [
                { value: "Les Capita", title: "Les Capita" },
            ],
            alt: "Loading...",
            caption: "'We sell fast food on Instagram, we want a very unconventional logo that represents hamburgers and our name in the background as if it were a contrast'."
        },
        {
            src: "/images/portfolio/design/business/img_05.png",
            width: 512,
            height: 512,
            tags: [
                { value: "Dulcería Angelita", title: "Dulcería Angelita" },
            ],
            alt: "Loading...",
            caption: "'We sell delicious sweets and ice creams and we want a logo that represents that, animated with lovely and pleasant colors for children and adults'."
        },
        {
            src: "/images/portfolio/design/business/img_06.png",
            width: 512,
            height: 512,
            tags: [
                { value: "García's Bar & Restaurant", title: "García's Bar & Restaurant" },
            ],
            alt: "Loading...",
            caption: "'A logo for a fast food restaurant selling hamburgers, hot dogs, and a mini bar for adults. It should be attractive to display physically like a traffic sign'."
        },
        {
            src: "/images/portfolio/design/business/img_03.png",
            width: 512,
            height: 512,
            tags: [
                { value: "litm49", title: "litm49" },
            ],
            alt: "Loading...",
            caption: "'A logo of a happy cat to be used as a profile picture on a meme account'."
        },
    ]

    return (
        <React.Fragment>
            <Introduction />

            <Gallery
                str_categorie={"Letter Logos:"}
                images_obj={logo_lyrics}
            />
            <Gallery
                str_categorie={"Entrepreneur Logos:"}
                images_obj={logo_entrepreneur}
            />

            <End />
        </React.Fragment>
    )
}
