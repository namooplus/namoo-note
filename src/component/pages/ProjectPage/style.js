import styled, { keyframes } from "styled-components";

export const BaseLayout = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-flow: column nowrap;
    padding: 50px;
    box-sizing: border-box;
    gap: 30px;
    overflow-y: scroll;
`

export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Category = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: black;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity 500ms;

    &:hover {
        opacity: 1;
    }
`
export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 15px;
`