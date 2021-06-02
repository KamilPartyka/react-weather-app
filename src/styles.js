import styled from 'styled-components';
import after_noon from './assets/after_noon.png';
import night from './assets/night.png';

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
  position: relative;
`;

export const StyledInput = styled.input`
  width: 400px;
  padding: 15px 10px;
  box-shadow: 0px 5px 25px -4px rgb(0 0 0 / 50%);
  border: 1px solid white;
  font-size: 1rem;
  transition: background 0.2s ease;

  ::placeholder {
    color: black;
  }

  :focus {
    background-color: #d6d6d6;
    outline: none;
    color: black;
  }
  :focus::placeholder {
    color: black;
  }
`;

export const StyledResults = styled.div`
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  overflow: auto;
  border: 1px solid white;
  color: black;
  position: absolute;
  background-color: #d6d6d6;
  box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 50%);

  ul {
    list-style: none;
    user-select: none;
    padding-left: 0;
    margin: 5px 0;
  }

  li {
    cursor: pointer;
    padding: 10px 0;
    padding-left: 10px;
  }

  li:hover {
    background-color: lightblue;
  }

  p {
    padding-left: 10px;
  }
`;

export const StyledNoData = styled.div`
  height: 450px;

  p {
    font-size: 1.5rem;
  }
`;

export const StyledWeather = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  margin-top: 1rem;
  border-radius: 10px;
  background-image: ${({ timeOfDay }) =>
    timeOfDay > 18 ? `url(${night})` : `url(${after_noon})`};
  background-position: center;
  max-width: 400px;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 3px 5px rgb(0 0 0 / 35%);
  box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 50%);
`;

export const StyledMainWeather = styled.div`
  animation: appear 0.5s ease;

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
  animation: appear 0.5s ease;
  margin-bottom: 2rem;

  p {
    padding: 1rem;
    text-align: center;
  }
  span {
    padding: 1rem;
  }
`;
