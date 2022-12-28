import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-grey-0);
  border-radius: 5px;
  width: 300px;
  margin-bottom: 50px;
  div:first-child {
    background-color: var(--color-grey-0);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin: 0 auto;
      width: 177px;
      /* height: 100%; */
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 26px 20px;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--color-grey-600);
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--color-grey-300);
  }
  p:nth-child(4) {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: var(--color-primary);
  }
  button {
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    padding: 0 20px;
    width: max-content;
    height: 40px;
    border-radius: 8px;
  }
`;
