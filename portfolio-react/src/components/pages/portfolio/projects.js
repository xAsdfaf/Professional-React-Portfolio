import React from "react";
import Portfolio from "./Portfolio";

const projects = [
    {
        id: 0,
        title: 'Lyric Translator',
        image: 'placehlder',
        description: 'An app used to translate any song into various languages!',
        repo: 'https://github.com/treecao/lyric-translator',
        live: 'https://treecao.github.io/lyric-translator/'
    },
    {
        id: 1,
        title: 'NicTacToe',
        image: 'placehlder',
        description: 'An arcade consisting of Hangman, TicTacToe, and Snake',
        repo: 'https://github.com/CoreyDC/nic-tac-toe',
        live: 'https://nic-tac-toe.herokuapp.com/login'
    },
    {
        id: 2,
        title: 'Day Planner',
        image: 'placehlder',
        description: 'An app used to plan out your work day',
        repo: 'https://github.com/xAsdfaf/best-planner-youve-ever-seen',
        live: 'https://xasdfaf.github.io/best-planner-youve-ever-seen/'
    },
    {
        id: 3,
        title: 'J.A.T.E - Just Another Text Editor',
        image: 'placehlder',
        description: 'A downloadble app used to edit text in a browser or on your desktop!',
        repo: 'https://github.com/xAsdfaf/Notepad-But-Better',
        live: 'https://notepad-but-better.herokuapp.com/'
    },
    {
        id: 4,
        title: 'JavaScript Gauntlet',
        image: 'placehlder',
        description: 'A quiz that tests your basic knowledge of Vanilla JS!',
        repo: 'https://github.com/xAsdfaf/The-JavaScript-Gauntlet',
        live: 'https://xasdfaf.github.io/The-JavaScript-Gauntlet/'
    },
    {
        id: 5,
        title: 'Password Generator',
        image: 'placehlder',
        description: 'Randomly Generates a random, secure password!',
        repo: 'https://github.com/xAsdfaf/greatest-generator-ever',
        live: 'https://xasdfaf.github.io/greatest-generator-ever/'
    },
];

function Portfolio() {
    return (
        <>
            <p className="content is-medium">Portfolio</p>
            <Project projects={projects} />
        </>
    );
};

export default Portfolio;