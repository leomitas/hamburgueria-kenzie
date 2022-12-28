import styled from 'styled-components'

export const ModalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.25);
  div:first-child {
    border-radius: 5px 5px 0 0;
  }
  div:last-child {
    border-radius: 5px;
  }
  div {
    width: 90%;
    max-width: 500px;
    padding: 0 auto;
    background-color: white;
    div:first-child {
      width: 100%;
      height: max-content;
      padding: 5px 10px;
      background-color: var(--color-primary);
      color: var(--color-grey-0);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
      }
    }
  }
`

export const Button = styled.button`
  width: 90%;
  margin: 20px auto;
  padding: 20px 0;
  background-color: var(--color-grey-100);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: var(--color-grey-300);
`
