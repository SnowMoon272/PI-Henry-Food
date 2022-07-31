/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import NavBar from "../Header/NavBar";
// font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;

const HeaderStyle = styled.header`
  font-family: "Dancing Script", cursive;
  margin-top: 100px;

  padding: 25px;
  max-width: 800px;
  width: 1500px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.935);
  background-color: #0000008f;

  color: #ffffff;
  user-select: none;

  .href-henry {
    color: rgb(255, 196, 0);
    text-transform: uppercase;
  }

  .href-henry:hover {
    color: rgb(228, 175, 0);
  }

  .href-spoon {
    color: rgb(255, 196, 0);
    text-transform: uppercase;
  }

  .href-spoon:hover {
    color: rgb(228, 175, 0);
  }

  .tech-title {
    margin-top: 20px;
    color: black;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
      sans-serif;
    text-transform: uppercase;
  }

  .tech-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .javascript {
    margin: 15px;
  }

  .img-javascript {
    width: 45px;
    height: 45px;
    margin-left: 16px;
  }

  .text-javascript {
    font-size: 15px;
    text-align: center;
  }

  .html {
    margin: 15px;
  }

  .img-html {
    width: 45px;
    height: 45px;
  }

  .text-html {
    font-size: 15px;
    text-align: center;
  }

  .css {
    margin: 15px;
  }

  .img-css {
    width: 45px;
    height: 45px;
  }

  .text-css {
    font-size: 15px;
    text-align: center;
  }

  .react {
    margin: 15px;
  }

  .img-react {
    width: 45px;
    height: 45px;
  }

  .text-react {
    font-size: 15px;
    text-align: center;
  }

  .redux {
    margin: 15px;
  }

  .img-redux {
    width: 45px;
    height: 45px;
  }

  .text-redux {
    font-size: 15px;
    text-align: center;
  }

  .express {
    margin: 15px;
  }

  .img-express {
    width: 45px;
    height: 45px;
    margin-left: 5px;
  }

  .text-express {
    font-size: 15px;
    text-align: center;
  }

  .PostgreSQL {
    margin: 15px;
  }

  .img-PostgreSQL {
    width: 45px;
    height: 45px;
    margin-left: 20px;
  }

  .text-PostgreSQL {
    font-size: 15px;
    text-align: center;
  }
`;

export default function About() {
  return (
    <HeaderStyle className="container">
      <NavBar />
      <div className="about">
        <h1>Henry Food</h1>
        <p>
          Este proyecto fue creoado como parte de mi formacion como desarrollador Fullstack en
          <a
            className="href-henry"
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Henry bootcamp
          </a>
          . In order to map all the different recipess food, this app consumes data from{" "}
          <a
            className="href-spoon"
            href="https://spoonacular.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the food API
          </a>
          . It is also possible to create a new recipe food, entering a name, score, health score
          and instructions on how to prepare a delicious dish.
        </p>
        <p>
          Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to
          create your recipe food!
        </p>
      </div>
      <h1 className="tech-title">Used technologies:</h1>
      <div className="tech-container">
        <div className="javascript">
          <img
            className="img-javascript"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
          <h1 className="text-javascript">Javascript</h1>
        </div>
        <div className="html">
          <img
            className="img-html"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html"
          />
          <h1 className="text-html">HTML</h1>
        </div>
        <div className="css">
          <img
            className="img-css"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css"
          />
          <h1 className="text-css">CSS</h1>
        </div>
        <div className="react">
          <img
            className="img-react"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
          />
          <h1 className="text-react">React</h1>
        </div>
        <div className="redux">
          <img
            className="img-redux"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
          />
          <h1 className="text-redux">Redux</h1>
        </div>
        <div className="express">
          <img
            className="img-express"
            src="https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png"
            alt="express"
          />
          <h1 className="text-express">Express</h1>
        </div>
        <div className="PostgreSQL">
          <img
            className="img-PostgreSQL"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="PostgreSQL"
          />
          <h1 className="text-PostgreSQL">PostgreSQL</h1>
        </div>
      </div>
    </HeaderStyle>
  );
}
