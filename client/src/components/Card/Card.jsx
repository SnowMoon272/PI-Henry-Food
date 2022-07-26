/* eslint-disable no-restricted-syntax */
import React from "react";
import styled from "styled-components";
import LinkStayled from "../Styles/LinkStyled";

const CardStyle = styled.div`
  border-top-right-radius: 60px;
  border-end-start-radius: 60px;
  background: linear-gradient(312deg, rgba(255, 204, 0, 1) 5%, rgba(143, 118, 22, 1) 33%);
  width: 450px;
  height: 450px;
  margin: 45px 50px;
  overflow: hidden;

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
    height: 217px;

    h2 {
      margin-top: 10px;
      padding: 0px 8px;
      border-bottom: solid black 2px;
    }

    h3 {
      margin: 0px;
      padding: 0px 25px;
    }

    button {
      font-family: "Dancing Script", cursive;
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;
      align-items: center;
      justify-content: center;
      margin: 0px 15px 15px 0px;
      padding: 4px 28px;
      font-size: 2.5rem;
      background-color: #c3b374;
      border: 2px solid white;
      border-radius: 25px;
      transition: all 0.5s ease;
      text-align: center;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
        color: #030303;
        background-color: #fecd08a3;
        border: 0.2px solid #fecd08a3;
        text-align: center;
      }
    }
  }
`;

function Card({ title, image, diets }) {
  const getDiets = function () {
    const onlyDiets = [];
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
      <img src={image} alt="img not foud" />
      <div>
        <h2>{title}</h2>
        <h3>{getDiets()}</h3>
        <LinkStayled>
          <button type="button">Learn More</button>
        </LinkStayled>
      </div>
    </CardStyle>
  );
}

export default Card;
