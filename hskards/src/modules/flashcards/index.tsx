import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    width: 100%;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    justify-content: center;
    background-color: #f6f7fb;
`;

const AppContainer = styled.section`
    display: flex;
    width: 100%;
    @media (min-width: 600px) {
        width: 460px;
    }
    margin: 10px;
    justify-content: center;
`;

const ControlPanel = styled.section`
    width: 55px;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    margin-right: 7px;
`;

const Button_Simplified = styled.section`
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: #0095ff;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`;

const Flashcard = styled.section`
    width: 100%;
    height: 200px;
    @media (min-width: 600px) {
        height: 260px;
    }
    background-color: transparent;
    perspective: 1000px;
`;

const Flashcard_Inner = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    &:hover {
        transform: rotateX(180deg);
    }
`;

const Flashcard_Front = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

const Flashcard_Back = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateX(180deg);
`;

export const Flashcards = () => {
    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <Button_Simplified>中文</Button_Simplified>
                    <Button_Simplified>EN</Button_Simplified>
                    <Button_Simplified>拼音</Button_Simplified>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front>Dog</Flashcard_Front>
                        <Flashcard_Back>Shit</Flashcard_Back>
                    </Flashcard_Inner>
                </Flashcard>
            </AppContainer>
        </Wrapper>
    );
};
