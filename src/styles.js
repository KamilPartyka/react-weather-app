import styled from 'styled-components';
import after_noon from './assets/after_noon.png';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInputWrapper = styled.div`
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
`;

export const StyledResults = styled.div`
  max-width: 400px;
  max-height: 400px;
  overflow: auto;
  border: 1px solid black;
  border-top: none;
  position: absolute;
  background-color: white;
  width: 100%;

  ul {
    list-style: none;
    user-select: none;
    padding-left: 0;
    margin: 5px 0;
  }

  li {
    cursor: pointer;
    padding: 7px 0;
    padding-left: 10px;
  }

  li:hover {
    background-color: lightblue;
  }

  p {
    padding-left: 10px;
  }
`;

export const StyledWeather = styled.div`
  margin-top: 1rem;
  border-radius: 10px;
  background-image: url(${after_noon});
  background-position: center;
  max-width: 400px;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 3px 5px rgb(0 0 0 / 50%);
  box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 50%);
`;

export const StyledNoData = styled.div`
  height: 450px;

  p {
    font-size: 1.5rem;
  }
`;

export const StyledMainWeather = styled.div`
  h2 {
    margin-bottom: 0;
    font-size: 2rem;
  }

  h3 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  p {
    text-align: center;
    margin-top: 0;
    font-size: 1.1rem;
  }
`;

export const StyledAdditionalWeather = styled.div`
  margin-bottom: 2rem;

  p {
    padding: 1rem;
    text-align: center;
  }
  span {
    padding: 1rem;
  }
`;
