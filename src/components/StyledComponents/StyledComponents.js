import styled from 'styled-components';

export const AnswerContainer = styled.form`
  display: grid;
  grid-template: 15rem 15rem / 40rem 40rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(to bottom right, red, blue);
`;

export const Question = styled.h2`
  font-size: 3.4rem;
  padding: 0 9rem;
  display: flex;
  justify-content: center;
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 4.4rem;
`;

export const Countdown = Title.extend``;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToggleButton = styled.a`
  padding: 1rem 4rem;
  border: none;
  background-color: #eee;
  cursor: pointer;
`;
