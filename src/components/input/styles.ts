import styled from "styled-components";

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 0;
    width: 100%;
    input {
        height: 60px;
        border: 2px solid var(--color-grey-600);
        padding: 20px 15px;
        border-radius: 8px;
    }
`