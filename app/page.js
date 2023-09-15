import React from "react";

import "../public/css/bootstrap.css";

import Alert from "./home/Alert";
import HomeSection from "./home/Section";
import Cards from "./home/Cards";
import { NewPost, PrevPost } from "./home/Posts";

export default function Home() {
  return (
    <main>
      <Alert />
      <HomeSection />
      <Cards />

      <NewPost
        Title="New project in React Native: MAPS-INFO Android App"
        Text=" Android oriented APP that allows you to find and explore information about countries by tapping on the map"
        Date="15/09/2023"
        PostLink="/projects/frameworks#native-section"
      />

      <PrevPost
        Title="New project in React Native: Web-App (with Swipe To Refresh)"
        Text="Displays a web page within a WebView component. It includes 'pull-to-refresh' functionality and handles errors for internet connection issues"
        Date="14/09/2023"
        PostLink="/projects/frameworks#native-section"
      />
      <PrevPost
        Title="New project in Python: TorogOS Drivers/CODECS Installer (CLI)"
        Text="A simple but useful real-time package selection and automation tool developed for TorogOS"
        Date="25/08/2023"
        PostLink="/projects/python"
      />
      <PrevPost
        Title="New project in ReactJS: In-Memory"
        Text="A project that hosts a series of memory agility games specially designed for individuals facing Alzheimer disease"
        Date="23/08/2023"
        PostLink="/projects/frameworks#react-section"
      />
      <PrevPost
        Title="New project: TorogOS Linux (Spanish)"
        Text="TorogOS es un sistema operativo enfocado en la maximización de recursos y la eliminación de bloatware, una distribución diseñada para ser soportable en casi cualquier arquitectura moderna y/o vieja"
        Date="27/07/2023"
        PostLink="/projects/torogos"
      />
      <PrevPost
        Title="New project in Python: Super Mario Bros (Python Clone)"
        Text="A clone builded entirely in Python from the classic game Super Mario Bros from Nintendo"
        Date="24/07/2023"
        PostLink="/projects/python"
      />
      <PrevPost
        Title="New project in Python: RSpeechPy (Python Package)"
        Text="Realist Text To Speech Engine as a Python Package powered by Azure Ai Voices (use without API Key)"
        Date="17/07/2023"
        PostLink="/projects/python"
      />
      <PrevPost
        Title="New project in ReactJS: LaHoraLibre (Blogsite)"
        Text="A blogsite builded entirely in ReactJS, Bootstrap & SASS, the project was a means of dissemination in spanish powered by an IA Engine developed in El Salvador (Barlow Engine)"
        Date="23/06/2023"
        PostLink="/projects/frameworks#react-section"
      />
      <PrevPost
        Title="New project in ReactJS: To-Do List"
        Text="A simple ToDo List builded with ReactJS (administred in ViteJS), dark-mode as default theme"
        Date="24/04/2023"
        PostLink="/projects/frameworks#react-section"
      />
      <PrevPost
        Title="New project in ReactJS: Simple Calculator"
        Text="A calculator builded ReactJS (NextJS) with porcentage and decimal numbers support"
        Date="19/04/2023"
        PostLink="/projects/frameworks#react-section"
      />
      <PrevPost
        Title="New project in Python: SNARF (Realist TTS Generator)"
        Text="A realist TTS engine powered by Microsoft Azure API (without KEY for use) with minimalist GUI"
        Date="18/02/2023"
        PostLink="/projects/python"
      />
      <PrevPost
        Title="New project in Python: GPT-3 Translate (with Speech Recognition)"
        Text="A project that use OpenAI API (GPT3/2) to build a translate engine"
        Date="09/08/2021"
        PostLink="/projects/python"
      />
    </main>
  );
}
