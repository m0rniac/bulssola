import React from 'react'

import Introduction from './components/Introduction'
import Gallery from './components/Gallery'
import End from './components/End';
import Another from './components/Another';

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
    {
        src: "/images/portfolio/design/lyrics/img_04.png",
        width: 512,
        height: 512,
        tags: [
            { value: "Bilingual4you", title: "Bilingual4you" },
        ],
        alt: "Loading...",
        caption: "'We are a small English school for children and we want a very animated logo full of colors to captivate the kids'."
    },
    {
        src: "/images/portfolio/design/lyrics/img_05.jpg",
        width: 512,
        height: 512,
        tags: [
            { value: "Splitter Group", title: "Splitter Group" },
        ],
        alt: "Loading...",
        caption: "'We are a group of screenwriters from LATAM on Telegram and we want a logo with the initial S, white background, and minimalist, clear lettering, easy to remember'."
    },
    {
        src: "/images/portfolio/design/lyrics/img_06.png",
        width: 512,
        height: 512,
        tags: [
            { value: "Last Plot", title: "Last Plot" },
        ],
        alt: "Loading...",
        caption: "'We are a group of graphic designers on WhatsApp and we want to change our logo to a more formal news-classic style in El Salvador'."
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
    {
        src: "/images/portfolio/design/business/img_07.png",
        width: 512,
        height: 512,
        tags: [
            { value: "FluffyDog Shop", title: "FluffyDog Shop" },
        ],
        alt: "Loading...",
        caption: "'We are a small business distributing healthy dog food, we need a suitable logo'."
    },
    {
        src: "/images/portfolio/design/business/img_08.jpg",
        width: 512,
        height: 512,
        tags: [
            { value: "Redactores LATAM", title: "Redactores LATAM" },
        ],
        alt: "Loading...",
        caption: "'We are a group of writers on WhatsApp and we need a logo for our group that is very minimalist and clear'."
    },
    {
        src: "/images/portfolio/design/business/img_09.png",
        width: 512,
        height: 512,
        tags: [
            { value: "Hot DGG", title: "Hot DGG" },
        ],
        alt: "Loading...",
        caption: "'We are a physical establishment that sells fast food such as hamburgers, pizza, hot-dogs, etc. We need a logo useful for printing and marketing, this logo will be for bags, plates, profile, etc'."
    },
    {
        src: "/images/portfolio/design/business/img_10.png",
        width: 512,
        height: 512,
        tags: [
            { value: "AIGS Food", title: "AIGS Food" },
        ],
        alt: "Loading...",
        caption: "'We are a physical place selling and preparing meat for home delivery. We make dishes like barbecue grills, sausages, steaks, ceviche among many other dishes. We want a suitable logo'."
    },
    {
        src: "/images/portfolio/design/business/img_11.png",
        width: 512,
        height: 512,
        tags: [
            { value: "LasKangreburguers", title: "LasKangreburguers" },
        ],
        alt: "Loading...",
        caption: "'We are a local restaurant in El Salvador specializing in making classic-style hamburgers, we want a logo of a food cart like the old ones'."
    },
]

/* 3) Logos (Watermark) */
const logo_watermark = [
    {
        src: "/images/portfolio/design/watermark/img_01.png",
        width: 512,
        height: 512,
        tags: [
            { value: "Albabird", title: "Albabird" },
        ],
        alt: "Loading...",
        caption: "'We need a watermark according to our logo, it must be a logo with overlay and in a circular ratio'."
    },
    {
        src: "/images/portfolio/design/watermark/img_02.png",
        width: 512,
        height: 512,
        tags: [
            { value: "BirdsRRR", title: "BirdsRRR" },
        ],
        alt: "Loading...",
        caption: "'We need a 2D logo in green color that represents a bird and the 3 R's'."
    },
]

/* 3) Illustrations */
const illustrations = [
    {
        src: "/images/portfolio/design/ilustrations/img_01.png",
        width: 512,
        height: 512,
        tags: [
            { value: "Tarramá CASINO & Bar", title: "Tarramá CASINO & Bar" },
        ],
        alt: "Loading...",
        caption: "'We are a small bar in a pink zone of El Salvador and we want a CASINO illustration to print it as decorative photography'."
    },
    {
        src: "/images/portfolio/design/ilustrations/img_02.png",
        width: 512,
        height: 512,
        tags: [
            { value: "DeviantArt USER", title: "DeviantArt USER" },
        ],
        alt: "Loading...",
        caption: "'I have an illustration idea that I need you to materialize in black and white folio'."
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
            <Gallery
                str_categorie={"Watermark Logos:"}
                images_obj={logo_watermark}
            />
            <Gallery
                str_categorie={"Ilustrations:"}
                images_obj={illustrations}
            />
            <End />
            

            <Another />
        </React.Fragment>
    )
}
