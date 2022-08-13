/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import Error404Imge from "../../img/Error404Image.webp";
import LinkStayled from "../Styles/LinkStyled";

const Error404StyledCont = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & #button {
    position: absolute;
    right: 240px;
    bottom: 175px;
  }

  & .ContentStyle {
    border-radius: 25px;
    width: 70%;
    height: 60%;
    padding: 50px;
    border-radius: 25px;
    background-color: #0000008f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div {
      display: flex;
      width: fit-content;
      justify-content: center;
      align-items: center;
      border-bottom: #af911a solid 3px;
    }
  }

  & h1 {
    color: #af911a;
    font-size: 10rem;
    margin: 0px;
    padding-right: 40px;
  }

  & h2 {
    color: #af911a;

    font-size: 8rem;
    margin: 0px;
  }

  & p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
    width: fit-content;
    color: #fff;
    font-size: 3rem;

    & span {
      font-size: 4rem;
      color: #af911a;
      border-bottom: #af911a solid 3px;
    }
  }

  & img {
    border: solid #ffffff 3px;
    box-shadow: 0px 0px 25px 7px #ffffff;
    border-radius: 25px;
    margin: 40px;
    width: 450px;
  }
`;

function Error404() {
  const url = window.location.href;

  return (
    <Error404StyledCont>
      <div className="ContentStyle">
        <div>
          <h1>404</h1>
          <h2>Not Found</h2>
        </div>
        {/* {url === "http://localhost:3000/error404" ? ( @Remplazar esta linea si se esta en localhost */}
        {url === "https://pi-henry-food-gold.vercel.app/error404" ? (
          <p>
            <span> I'm sorry !</span> &#128546; We couldn't find your recipe, but try something
            else.
          </p>
        ) : (
          <p>
            <span> I'm sorry !</span> &#128546; I think you're lost.
          </p>
        )}

        <img src={Error404Imge} alt="" />
      </div>
      <LinkStayled ret="true" to="/home">
        <button id="button" type="button">
          Return
        </button>
      </LinkStayled>
    </Error404StyledCont>
  );
}

export default Error404;
