import styled from 'styled-components'

export const Form = styled.form`
  width: 50%;
  border-radius: 5px;
  border: 2px solid var(--color-grey-0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      color: var(--color-grey-300);
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--color-grey-600);
  }
  button {
    background-color: var(--color-primary-2);
    padding: 0 40px;
    height: 60px;
    width: 100%;
    border-radius: 8px;
    color: var(--color-grey-0);
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  }
  button:last-child {
    background-color: var(--color-grey-0);
    color: var(--color-grey-5);
  }
  p:first-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: var(--color-grey-5);
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--color-negative);
    padding-top: 9px;
  }
`
