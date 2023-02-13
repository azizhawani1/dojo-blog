import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  .cursor {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    background-color: rgb(238, 130, 31);
    border-radius: 50%;
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
  }
    a {
      &:hover {
        & ~ div {
          transform: rotate(0deg) scale(1) translateY(-400px);
          opacity: 1;
        }
      }
    }
    .img-cont {
      position: relative;
      width: 100%;
      opacity: 0;
      transition: 0.0s;
      img {
        border: 0px solid rgb(255, 255, 255, 0.5);
        width: 100%;
        border-radius: 0px;
      }
    }
`;