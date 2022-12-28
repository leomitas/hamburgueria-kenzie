import styled from 'styled-components'

export const ContainerRegister = styled.main`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  padding-right: 20px;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
  div > div > img {
    @media (min-width: 700px) {
      display: none;
    }
  }
`
