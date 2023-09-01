import React from 'react'

import Data from "../../data.json";
import "../../../public/css/bootstrap.css";

/* [CORPUS; Python] */
import PythonSection from "./components/Section";
import {
    NewCard
} from './components/Cards';

export const metadata = {
    title: 'Python | m0rniac',
    description: "Lista de proyectos desarrollados en Python por @bulssola",
    keywords: ["bulssola", "bulssola python", "bulssola python projects", "bulssola python scripts", "bulssola python github", "bulssola projects"],
    authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logopython,
    },
};
export default function Frameworks() {
    return (
        <React.Fragment>
            {/* [Corpus; React JS] */}
            <div className='python-section'>
                <PythonSection />

                <div className='container-fluid mt-2 w-75'>
                    <NewCard
                        Tittle='TorogOS Drivers/CODECS Installer (CLI)'
                        SubTitle='A simple but useful real-time package selection and automation tool developed for TorogOS'
                        ImageRoute='/images/posts/python/python_05.png'
                        Description='Technologies used: Python, Subprocess, Linux, Automatization'
                        GitHubRepo='https://github.com/m0rniac/torogos-drivers'
                        Date='25-08-2023'
                    />
                    <NewCard
                        Tittle='Super Mario Bros (Python Clone)'
                        SubTitle='A clone builded entirely in Python from the classic game Super Mario Bros'
                        ImageRoute='/images/posts/python/python_04.png'
                        Description='Technologies used: Python, PyGame, Linux, Windows'
                        GitHubRepo='https://github.com/m0rniac/supermario'
                        Date='24-07-2023'
                    />
                    <NewCard
                        Tittle='RSpeechPy (Realist Text to Speech Python Package)'
                        SubTitle='Realistic Text To Speech engine as a python package powered by Microsoft Azure AI Voices (Use without API Key)'
                        ImageRoute='/images/posts/python/python_03.png'
                        Description='Technologies used: Python, PyPi, Rest API (Microsoft Azure), Linux, Windows'
                        GitHubRepo='https://github.com/m0rniac/rspeechpy'
                        Date='17-07-2023'
                    />
                    <NewCard
                        Tittle='SNARF (Realist Text to Speech Generator)'
                        SubTitle='A realist Text To Speech engine powered by Microsoft Azure API (do not need API Key for run) builded entirely in Python, use a minimalist GUI.'
                        ImageRoute='/images/posts/python/python_02.png'
                        Description='Technologies used: Python, Rest API (Microsoft Azure), Linux, Windows'
                        GitHubRepo='https://github.com/m0rniac/snarf'
                        Date='18-02-2023'
                    />
                    <NewCard
                        Tittle='GPT-3 Translate | English to Spanish | (with Speech Recognition)'
                        SubTitle="A project that use OpenAI API (GPT-3/2) to build a translate engine as virtual assistant with Speech Recognition."
                        ImageRoute='/images/posts/python/python_01.jpg'
                        Description='Technologies used: Python, Rest API (As first OpenAI whitelist of members (GPT-3/2))'
                        GitHubRepo='https://github.com/m0rniac/GPT-3-Spanish'
                        Date='09-08-2021'
                    />
                </div>
                <br />
                <hr />
            </div>
        </React.Fragment>
    );
};