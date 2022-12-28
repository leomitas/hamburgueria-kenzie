import styled from 'styled-components';

export const FormSearch = styled.form`
  border: 2px solid var(--color-grey-100);
  border-radius: 8px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 365px;
  padding: 20px 15px;
  @media (max-width: 700px) {
    width: 90%;
  }

  input {
    color: var(--color-grey-20);
    height: 55px;
    border: none;
    outline: none;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-radius: 8px;
    height: 40px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
`;
