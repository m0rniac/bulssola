import React from 'react'

import Data from "../../data.json";
import "../../../public/css/bootstrap.css";

/* [CORPUS; ReactJS] */
import ReactSection from "./components/reactjs/Section";
import {
    NewCardJS
} from "./components/reactjs/Cards";

/* [Corpus; Neact Native] */
import NativeSection from "./components/reactnative/Section";
import {
    NewCardNative
} from "./components/reactnative/Cards";

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
            <div id='react-section' className='react-section'>
                <ReactSection />

                <div className='container-fluid mt-2 w-75'>
                    <NewCardJS
                        Tittle='In-Memory (ReactJS)'
                        SubTitle='A project that hosts a series of memory agility games specially designed for individuals facing Alzheimer disease. These games not only offer entertainment but also exercise and stimulate cognitive functions in a fun way.'
                        ImageRoute='/images/posts/frameworks/react_05.gif'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap, POO'
                        GitHubRepo='https://github.com/m0rniac/reactjs-inmemo'
                        Date='23-08-2023'
                    />
                    <NewCardJS
                        Tittle='B U L S S O L A'
                        SubTitle='A new dark styled portfolio for show my projects, you are here :D'
                        ImageRoute='/images/posts/frameworks/react_04.png'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap'
                        GitHubRepo='https://github.com/m0rniac/bulssola'
                        Date='29-07-2023'
                    />
                    <NewCardJS
                        Tittle='ReactJS Blogsite'
                        SubTitle='A blosite builded with ReactJS (NextJS) & SASS, the project was a means of dissemination in spanish powered by an Artificial Intelligence engine developed in El Salvador (BARLOW Engine).'
                        ImageRoute='/images/posts/frameworks/react_01.png'
                        Description='Technologies used: ReactJS (NextJS), SASS, Bootstrap, Python'
                        GitHubRepo='https://github.com/m0rniac/reactjs-blogsite'
                        Date='23-06-2023'
                    />
                    <NewCardJS
                        Tittle='ReactJS TodoList'
                        SubTitle='A simple ToDo List builded with ReactJS (administred in ViteJS), dark mode as default theme.'
                        ImageRoute='/images/posts/frameworks/react_03.png'
                        Description='Technologies used: ReactJS, ViteJS, SASS, Bootstrap'
                        GitHubRepo='https://github.com/m0rniac/reactjs-todolist'
                        Date='24-04-2023'
                    />
                    <NewCardJS
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

            {/* [Corpus; React Native] */}
            <div id='native-section' className='native-section'>
                <NativeSection />

                <div className='container-fluid mt-2 w-75'>
                    <NewCardNative
                        Tittle='🌍 React Native MAPS INFO'
                        SubTitle='This is a React Native (with Expo CLI) Android oriented APP that allows you to find and explore information about countries by tapping on the map.'
                        ImageRoute='/images/posts/frameworks/native_01.gif'
                        Description='Technologies used: React Native, Expo CLI, Maps API, API REST, Stylesheets'
                        GitHubRepo='https://github.com/m0rniac/reactnative-mapsinfo'
                        Date='15-09-2023'
                    />
                    <NewCardNative
                        Tittle='Web-App (with Swipe To Refresh)'
                        SubTitle='A mobile app builded with ExpoCLI and React Native, displays a web page within a WebView component. It includes "pull-to-refresh" functionality and handles errors for internet connection issues. The interface uses components like ScrollView and Modal'
                        ImageRoute='/images/posts/frameworks/native_02.gif'
                        Description='Technologies used: React Native, Expo CLI, WebView & Modal'
                        GitHubRepo='https://github.com/m0rniac/reactnative-web-app'
                        Date='14-09-2023'
                    />
                </div>
                <br />
                <hr />
            </div>
        </React.Fragment>
    );
};