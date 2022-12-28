import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 30px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    width: 100vw;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* justify-items: stretch; */
    /* justify-self: stretch; */
    gap: 4.5%;
    margin: 0 auto;
    @media (max-width: 700px) {
      flex-direction: row;
      overflow-x: scroll;
      flex-wrap: nowrap;
      justify-content: flex-start;
      padding: 0 20px;
    }
  }
`;
