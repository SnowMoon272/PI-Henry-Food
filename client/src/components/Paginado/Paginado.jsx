/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import React from "react";
import styled from "styled-components";

const UlStyle = styled.ul`
  display: flex;
  width: fit-content;
  margin: 20px auto;
  padding: 5px 25px;

  & li {
    margin: 4px 8px;
    list-style: none;
  }

  & li button {
    cursor: pointer;
    width: 40px;
    padding: 2px;
    margin: 0px;
    border-radius: 5px;
    color: #000000;
    font-weight: bold;
    border: 2px solid white;
    transition: all 0.5s ease;
    background-color: #fff4c7;
  }

  & li button:hover {
    transform: scale(1.5);
    cursor: pointer;
    background-color: #fecd08a3;
    border: 0.2px solid #fecd08a3;
    color: #ffffff;
  }
`;

function Paginado({ recipesPerPage, allRecipes, paginado, currentPage }) {
  const pageNumbers = [];

  function romanize(num) {
    const lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = "";
    let i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <UlStyle>
        {pageNumbers?.map((number) => {
          return (
            <li key={number}>
              <button type="button" onClick={() => paginado(number)}>
                {currentPage === number ? "*" : romanize(number)}
              </button>
            </li>
          );
        })}
      </UlStyle>
    </nav>
  );
}

export default Paginado;
