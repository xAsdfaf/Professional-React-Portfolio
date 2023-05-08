import React from 'react';
import Card from "react-bootstrap/Card";
import '../../index.css';
import Dayplanner from '../assets/images/dayplanner.png';
import JATE from '../assets/images/JATE.png';
import Lyric from '../assets/images/lyric-translator.png';
import Nick from '../assets/images/nictactoe.png';
import Quiz from '../assets/images/quiz.png'
import Password from '../assets/images/password.png';
import videoBg from '../assets/images/videoBg.mp4';


export default function Portfolio() {
  return (
    <>
    <div className='main'>
    <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    
      <div className="container d-flex flex-wrap">
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Lyric}
          />
          <Card.Body>
            <Card.Title>Lyric Translator</Card.Title>
            <Card.Text>
            An app used to translate any song into various languages!
            </Card.Text>
            <a
              href="https://treecao.github.io/lyric-translator/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/treecao/lyric-translator"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Nick}
          />
          <Card.Body>
            <Card.Title>NicTacToe</Card.Title>
            <Card.Text>
            An arcade consisting of Hangman, TicTacToe, and Snake
            </Card.Text>
            <a
              href="https://nic-tac-toe.herokuapp.com/login"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/CoreyDC/nic-tac-toe"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Dayplanner}
          />
          <Card.Body>
            <Card.Title>Workday Planner</Card.Title>
            <Card.Text>
            An app used to plan out your work day!
            </Card.Text>
            <a
              href="https://xasdfaf.github.io/best-planner-youve-ever-seen/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/xAsdfaf/best-planner-youve-ever-seen"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={JATE}
          />
          <Card.Body>
            <Card.Title>J.A.T.E</Card.Title>
            <Card.Text>
            A downloadble app used to edit text in a browser or on your desktop!
            </Card.Text>
            <a
              href="https://notepad-but-better.herokuapp.com/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/xAsdfaf/Notepad-But-Better"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Quiz}
          />
          <Card.Body>
            <Card.Title>JavaScript Gauntlet</Card.Title>
            <Card.Text>
            A quiz that tests your basic knowledge of Vanilla JS!
            </Card.Text>
            <a
              href="https://xasdfaf.github.io/The-JavaScript-Gauntlet/"
              class="btn btn-primary"
            >
              Check it out Here
            </a>
            <a
              href="https://github.com/xAsdfaf/The-JavaScript-Gauntlet"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            border: "2px solid black",
            marginLeft: '75px',
            marginBottom: '5px'
          }}
        >
          <Card.Img
            style={{ height: "85%", objectFit: "fill" }}
            variant="top"
            src={Password}
          />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              A program that helps you edit and view all your employees by
              department and roles.
            </Card.Text>
            <a href="https://xasdfaf.github.io/greatest-generator-ever/" class="btn btn-primary">
              Check it out Here
            </a>
            <a
              href="https://github.com/xAsdfaf/greatest-generator-ever"
              class="btn btn-primary"
              style={{marginTop: '5px'}}
            >
              Check out my Repo
            </a>
          </Card.Body>
        </Card>
      </div>
      </div>
    </>
  );
}
