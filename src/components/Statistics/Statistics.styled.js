import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor.js';
const Statistic = styled.section`
  width: 350px;
  margin: 0 auto;
  background-color: white;
  margin-top: 30px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  font-family: system-ui;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70px;
  height: 70px;
  background-color: ${getRandomHexColor};
`;

const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 0;
`;
const Label = styled.span`
  margin-bottom: 7px;
`;

const Percentage = styled.span`
  color: black;
`;
export { Statistic, Title, Item, StatList, Label, Percentage };
