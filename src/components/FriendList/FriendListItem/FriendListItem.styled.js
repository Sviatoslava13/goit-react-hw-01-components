import styled from 'styled-components';
const Item = styled.li`
  width: 200px;
  height: 70px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
const Avatar = styled.img`
  display: block;
`;
const Name = styled.p`
  font-size: 24px;
  font-family: inherit;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

export { Name, Item, Status, Avatar };
