/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDetails } from "../../redux/actions/index";
import NavBar from "../Header/NavBar";
import imgDefaul from "../../img/fondoManu.jpg";

const H1Style = styled.h1`
  display: inline-block;

  position: relative;
  margin: 0px;
  padding-top: 80px;
  color: white;
  font-size: 5rem;
  top: -84px;
`;

const MainStyle = styled.main`
  box-sizing: border-box;
  width: 1400px;
  height: 100vh;
  margin: 0px auto;
  color: white;
`;

const SectionStyleCon = styled.section`
  box-sizing: border-box;
  /* border: solid #03ff03 3px; */
  width: 100%;
  height: fit-content;
  border-radius: 25px;
  background-color: #0000008f;

  & h1 {
    display: inline-block;
    font-size: 4rem;
    border-bottom: 3px solid #fff;
  }
  & .Img-Summary {
    display: flex;

    & img {
      object-fit: cover;
      width: 550px;
      height: 350px;
      border-end-start-radius: 120px;
      border-top-right-radius: 80px;
      border-top-left-radius: 15px;
      border-end-end-radius: 15px;
      margin: 40px;
      box-shadow: 0px 0px 25px 7px #ffffff;
    }

    & p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
      padding: 20px 20px 20px 55px;
      margin: 10px;
      text-align: justify;
      font-size: 2.2rem;
    }
  }
`;

function Detail(props) {
  const dispatch = useDispatch();
  const theRecipe = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <MainStyle>
        <H1Style>Recipe Detail</H1Style>
        <SectionStyleCon>
          {theRecipe.title && <h1>{theRecipe.title}</h1>}
          <div className="Img-Summary">
            {theRecipe.summary && (
              <p
                dangerouslySetInnerHTML={{
                  __html: theRecipe.summary,
                }}
              />
            )}
            {theRecipe.image && <img src={theRecipe.image || imgDefaul} alt="img not foud" />}
          </div>
          <div className="Content">Hola</div>
        </SectionStyleCon>
      </MainStyle>
    </>
  );
}

export default Detail;

{
  /* <h3>{theRecipe.diets}</h3> */
}
