import styled from 'styled-components'

export const Ul = styled.ul`
  width: 100%;
  li {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: flex-start;
  }
  li > img {
    width: 80px;
    height: 80px;
    background-color: var(--color-grey-100);
    border-radius: 5px;
  }
  li > div {
    padding: 0 10px;
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-grey-600);
    }
  }
  li > div > div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 30px 5px 0 5px;
    justify-content: space-between;
    align-items: center;
    width: 105px;
    /* height: 34px; */
    button {
      padding: 2px 10px;
      background-color: var(--color-grey-100);
      color: var(--color-secundary);
      font-size: 22px;
    }
  }
`
