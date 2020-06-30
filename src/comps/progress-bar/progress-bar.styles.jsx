import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 15px;
`;

export const Progress = styled.progress`
  width: 500px;
  height: 25px;
  display: block;
  -webkit-appearance: none;
  border: none;
  margin-top: 15px;

  &::-webkit-progress-bar {
    background: white;
    border-radius: 50px;
  }

  &::-webkit-progress-value {
    border-radius: 50px;
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.4);
    background: #ffbe22;
  }
`;
