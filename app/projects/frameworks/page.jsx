import React from 'react'

import Data from "../../data.json";
import "../../../public/css/bootstrap.css";

/* [CORPUS; ReactJS] */
import ReactSection from "./components/reactjs/Section";
import {
    NewCard
} from "./components/reactjs/Cards";

export const metadata = {
    title: 'JS Frameworks | m0rniac',
    description: "Lista de proyectos desarrollados en Javascript Frameworks por @bulssola",
    keywords: ["bulssola", "bulssola react", "bulssola reactjs", "bulssola vuejs", "bulssola nextjs", "bulssola projects"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logojavascript,
    },
};
export default function Frameworks() {
    return (
        <React.Fragment>
            {/* [Corpus; React JS] */}
            <div className='react-section'>
                <ReactSection />

                <div className='container-fluid mt-2 w-75'>
                    <NewCard
                        Tittle='In-Memory (ReactJS)'
                        SubTitle='A project that hosts a series of memory agility games specially designed for individuals facing Alzheimer disease. These games not only offer entertainment but also exercise and stimulate cognitive functions in a fun way.'
                        ImageRoute='/images/posts/frameworks/react_05.gif'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap, POO'
                        GitHubRepo='https://github.com/m0rniac/reactjs-inmemo'
                        Date='23-08-2023'
                    />
                    <NewCard
                        Tittle='B U L S S O L A'
                        SubTitle='A new dark styled portfolio for show my projects, you are here :D'
                        ImageRoute='/images/posts/frameworks/react_04.png'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap'
                        GitHubRepo='https://github.com/m0rniac/bulssola'
                        Date='29-07-2023'
                    />
                    <NewCard
                        Tittle='ReactJS Blogsite'
                        SubTitle='A blosite builded with ReactJS (NextJS) & SASS, the project was a means of dissemination in spanish powered by an Artificial Intelligence engine developed in El Salvador (BARLOW Engine).'
                        ImageRoute='/images/posts/frameworks/react_01.png'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap, Python'
                        GitHubRepo='https://github.com/m0rniac/reactjs-blogsite'
                        Date='23-06-2023'
                    />
                    <NewCard
                        Tittle='ReactJS TodoList'
                        SubTitle='A simple ToDo List builded with ReactJS (administred in ViteJS), dark mode as default theme.'
                        ImageRoute='/images/posts/frameworks/react_03.png'
                        Description='Technologies used: ReactJS, ViteJS, SASS, Bootstrap'
                        GitHubRepo='https://github.com/m0rniac/reactjs-todolist'
                        Date='24-04-2023'
                    />
                    <NewCard
                        Tittle='ReactJS Calculator'
                        SubTitle='A simple calculator builded with ReactJS (NextJS), support porcentage and decimal numbers.'
                        ImageRoute='/images/posts/frameworks/react_02.png'
                        Description='Technologies used: ReactJS, SASS, Bootstrap'
                        GitHubRepo='https://github.com/m0rniac/reactjs-calculator'
                        Date='19-04-2023'
                    />
                </div>
                <br />
                <hr />
            </div>
        </React.Fragment>
    );
};