// External Library
import styled from "styled-components";

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5rem;

    @media screen and (max-width: 475px) {
        gap: 20rem;
    }
`