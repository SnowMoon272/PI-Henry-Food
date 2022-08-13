/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import NavBar from "../Header/NavBar";
// font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;

const HeaderStyleCont = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TecnologisStyleCont = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
    height: 50px;
    margin: 10px 35px;
  }
`;

const HeaderStyle = styled.header`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
  box-sizing: border-box;

  margin-top: 150px;
  font-size: 2rem;
  padding: 50px;
  /*  max-width: 800px; */
  width: 1200px;
  border-radius: 35px;
  background-color: #000000af;
  color: #ffffff;

  & h1 {
    font-family: "Dancing Script", cursive;
    border-bottom: 3px solid #af911a;
    color: #af911a;
    display: inline-block;
    font-size: 5rem;
    margin: 0px 0px 25px 0px;
  }

  & h2 {
    font-family: "Dancing Script", cursive;
    border-bottom: 3px solid #af911a;
    color: #af911a;
    display: inline-block;
    font-size: 3rem;
    margin: 35px 0px 25px 0px;
  }

  & .Links {
    color: rgb(255, 196, 0);
    text-transform: uppercase;

    & :hover {
      color: rgb(228, 175, 0);
    }
  }

  & .Oculto a {
    color: #be9c15;
    border-radius: 10px;
    text-decoration: underline;
    padding: 2px 10px;
    font-weight: bold;
  }

  & .Span {
    color: #af911a;
  }

  & h6 {
    position: absolute;
    bottom: 120px;
    right: 370px;
  }
`;

export default function About() {
  return (
    <HeaderStyleCont>
      <NavBar />
      <HeaderStyle>
        <h1>Henry Food</h1>
        <p>
          Este proyecto fue creado como parte de mi formación como desarrollador Fullstack en
          <a
            className="Links"
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            " Henry bootcamp "
          </a>
          . Se utilizó una API externa para poder mostrar toda la gama de recetas que este sitio
          ofrece:
          <a
            className="Links"
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            " Spoonacular "
          </a>
          . Adicional a esto se le sumó al proyecto una base de datos local, mediante la cual
          podemos agregar nuestras propias recetas, cuenta con filtros y ordenamientos que ayudan a
          navegar entre las recetas.
        </p>
        <p>
          Aquí comparto el code de Git Hub para analizar su código:{" "}
          <span className="Oculto">
            <a target="_blank" href="https://github.com/SnowMoon272/PI-Henry-Food" rel="noreferrer">
              " Git Hub Henry Food "
            </a>
          </span>
          <br />
          Gracias por visitar mi sitio. Att: <span className="Span">Manuel S.</span> <br /> Email:{" "}
          <span className="Span">CastielAltair0027@outlook.com</span>
          <br />
          <h6>
            Alias: <span className="Span Alias">SnowMoon</span>{" "}
          </h6>
        </p>

        <h2>Tecnologías utilizadas:</h2>
        <TecnologisStyleCont>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
            />
            <h3 className="text-javascript">Javascript</h3>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html"
            />
            <h3>HTML</h3>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css"
            />
            <h3>CSS</h3>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
            />
            <h3>React</h3>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
            />
            <h3>Redux</h3>
          </div>
          <div>
            <img
              src="https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png"
              alt="express"
            />
            <h3>Express</h3>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
            />
            <h3>PostgreSQL</h3>
          </div>
        </TecnologisStyleCont>
      </HeaderStyle>
    </HeaderStyleCont>
  );
}
