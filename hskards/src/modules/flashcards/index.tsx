import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    height: 300px;
    margin: 10px;
    padding-right: 10px;
    justify-content: center;
    background-color: #f6f7fb;
`;

const ControlPanel = styled.section`
    width: 50px;
    height: 300px;
    margin-right: 10px;
    background-color: red;
`;

const Flashcard = styled.section`
    min-width: 300px;
    max-width: 400px;
    height: 300px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: white;
`;

export const Flashcards = () => {
    return (
        <Wrapper>
            <ControlPanel></ControlPanel>
            <Flashcard></Flashcard>
        </Wrapper>
    );
};
