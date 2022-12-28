import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  border-top: 2px solid var(--color-grey-100);
  padding-top: 15px;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: var(--color-grey-600);
  }
  p:last-child {
    color: var(--color-grey-300);
  }
`
