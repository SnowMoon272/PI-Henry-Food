import React from "react";
import styled from "styled-components";

function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers?.map((number) => {
          return (
            <li key={number}>
              <button type="button" onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Paginado;
