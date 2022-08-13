/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
import React from "react";
import styled from "styled-components";
import LinkStayled from "../Styles/LinkStyled";
import imgDefaul from "../../img/fondoManu.jpg";

const CardStyle = styled.div`
  border-top-right-radius: 60px;
  border-end-start-radius: 60px;
  background: linear-gradient(312deg, rgba(255, 204, 0, 1) 5%, rgba(143, 118, 22, 1) 33%);
  width: 450px;
  height: 530px;
  margin: 45px 50px;
  overflow: hidden;
  box-shadow: 5px 5px 13px 9px rgba(0, 0, 0, 0.45);

  img {
    object-fit: cover;
    width: 450px;
    height: 230px;
    border-end-start-radius: 120px;
  }

  div {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 55%;

    h2 {
      margin-top: 10px;
      padding: 0px 8px;
      border-bottom: solid black 2px;
    }

    h3 {
      margin: 0px;
      padding: 0px 25px;
    }

    #BTN-CArd {
      font-family: "Dancing Script", cursive;
      margin: 0px 0px 15px 0px;
      padding: 4px 28px;
      font-size: 2.5rem;
      background-color: #c3b374;
      border: 2px solid white;
      border-radius: 25px;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
        color: #030303;
        background-color: #fecd08a3;
        border: 0.2px solid #fecd08a3;
      }
    }
  }
`;

function Card({ title, image, diets, healthScore, vegetarian, id }) {
  const url = window.location.href;
  const getDiets = function () {
    const onlyDiets = [];
    vegetarian && onlyDiets.push("vegetarian");

    if (diets) {
      for (const diet of diets) {
        typeof diet === "object" ? onlyDiets.push(diet.name) : onlyDiets.push(diet);
      }
    }
    const onlyDietsUP = onlyDiets.map((dietUP) => {
      return dietUP.charAt(0).toUpperCase() + dietUP.slice(1);
    });
    return onlyDietsUP.length ? onlyDietsUP.join(" | ") : "Diets Not Found!";
  };

  return (
    <CardStyle>
      <img src={image || imgDefaul} alt="img not foud" />
      <div>
        <h2>{title}</h2>
        <h3>
          {url === "http://localhost:3000/recipe" || "https://pi-henry-food-gold.vercel.app/recipe"
            ? diets.map((diet) => {
                return ` ${diet.charAt(0).toUpperCase() + diet.slice(1)} |`;
              })
            : getDiets()}
        </h3>
        <h3>{`Health Score :  ${healthScore}%`}</h3>
        {url !== "http://localhost:3000/recipe" &&
        "https://pi-henry-food-gold.vercel.app/recipe" ? (
          <LinkStayled to={`/detail/${id}`}>
            <button id="BTN-CArd" type="button">
              Learn More
            </button>
          </LinkStayled>
        ) : (
          <button id="BTN-CArd" type="button">
            Example
          </button>
        )}
      </div>
    </CardStyle>
  );
}

export default Card;
