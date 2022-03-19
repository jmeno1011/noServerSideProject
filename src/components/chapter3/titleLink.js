import styled from "styled-components";

export const HeaderTitle = styled.h1`
  margin: 0;
  position: relative;
  margin-bottom: 20px;
  a {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: -1.5rem;
    z-index: 5;
    display: flex;
    align-items: center;
    svg {
      color: darkred;
      font-size: 20px;
      visibility: hidden;
    }
  }
  a:hover {
    svg {
      visibility: visible;
    }
  }
`;

export const ContentTitle = styled.h2`
  margin: 0.83rem 0;
  position: relative;
  a {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: -1.5rem;
    z-index: 5;
    display: flex;
    align-items: center;
    svg {
      color: darkred;
      font-size: 20px;
      visibility: hidden;
    }
  }
  a:hover {
    svg {
      visibility: visible;
    }
  }
`;
