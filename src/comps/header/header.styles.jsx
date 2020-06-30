import styled from 'styled-components';

const yellow = '#FFBE22';
const grey = 'rgba(180, 180, 180, 1)';

export const Navbar = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Completed = styled.div`
  background: ${yellow};
  border-radius: 50px;
  width: 150px;
  height: 35px;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
`;

export const Icon = styled.i`
  margin-bottom: 30px;
  color: ${grey};
`;
