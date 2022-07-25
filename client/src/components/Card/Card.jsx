/* eslint-disable no-restricted-syntax */
import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: aqua;
  width: 350px;
  height: 400px;
  margin-bottom: 25px;
`;

function Card({ title, image, diets }) {
  const getDiets = function () {
    const onlyDiets = [];
    if (diets) {
      for (const diet of diets) {
        typeof diet === "object" ? onlyDiets.push(diet.name) : onlyDiets.push(diet);
      }
    }
    return onlyDiets.length ? onlyDiets.join(" / ") : "Diets Not Found!";
  };

  return (
    <CardStyle>
      <img
        src={image}
        style={{ objectFit: "cover" }}
        alt="img not foud"
        width="200px"
        height="250px"
      />
      <h2>{title}</h2>
      <h4>{getDiets()}</h4>
    </CardStyle>
  );
}

export default Card;
