import styled from 'styled-components'

export const ContainerAside = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 700px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 18px 14px;
  }

  div > div {
    background-color: #27ae601a;
    padding: 22px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
  }

  div > p {
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    color: var(--color-grey-300);
    span {
      font-weight: 700;
      color: var(--color-grey-4);
    }
  }
`
