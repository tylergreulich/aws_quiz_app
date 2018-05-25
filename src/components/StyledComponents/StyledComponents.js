import styled from 'styled-components';

export const AnswerContainer = styled.form`
  display: grid;
  grid-template: 20rem 15rem 15rem / 40rem 40rem;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to right, #c33764, #1d2671);
`;

export const ResultsContainer = AnswerContainer.extend`
  display: flex;
`;

// Question

export const Question = styled.h2`
  font-size: 3.4rem;
  padding: 0 9rem;
  display: flex;
  justify-content: center;
  color: #e4e5e6;
`;

export const QuestionContainer = styled.section`
  grid-column: 1 / 3;
`;

export const StyledInput = styled.input`
  height: 3rem;
  width: 3rem;
  border: 0.5rem solid green;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;

  &::after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 0.75rem;
    width: 0.75rem;
    background-color: green;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export const AppCard = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// Title

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 4.4rem;
  color: #e4e5e6;
  letter-spacing: 0.15rem;
`;

export const Countdown = Title.extend`
  font-size: 6rem;
`;

// Button

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToggleButton = styled.a`
  padding: 2rem 5rem;
  border: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  background-color: #eee;
  cursor: pointer;
  border-radius: 3rem;
  box-shadow: 0px 3px 17px -2px rgba(0, 0, 0, 0.75);

  &:active {
    background-color: #c1c1c1;
    outline: none;
  }

  &:focus {
    background-color: #c1c1c1;
    outline: none;
  }
`;

// Label

export const LabelContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    text-align: center;
  }
`;
