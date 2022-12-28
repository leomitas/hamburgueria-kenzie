import styled from 'styled-components'

export const HeaderHome = styled.header`
  width: 100vw;
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 20px auto;
    @media (max-width: 750px) {
      flex-direction: column;
      gap: 20px;
    }
    @media (max-width: 1400px) {
      margin: 20px 20px;
    }
  }
  img {
    height: max-content;
  }
  div > div {
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 24px;
    margin: 0;
    @media (max-width: 400px) {
      gap: 5px;
    }
    div {
      display: flex;
      gap: 40px;
      @media (max-width: 750px) {
        gap: 20px;
      }
    }
  }
`
