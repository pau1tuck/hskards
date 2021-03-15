import React, { useState } from "react";
import styled from "styled-components";

interface FontFamilyProps {
    readonly fontFamily: string;
}

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

const Button_Chinese = styled.section`
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: 5px;
    padding-right: 1px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    background-color: #0095ff;
    color: #fff;
    font-family: "Noto Sans SC";
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

const Flashcard_Front = styled.section<FontFamilyProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #fff;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.fontFamily || "Ma Shan Zheng"};
    font-size: 4rem;
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
    const [font, setFont] = useState("Noto Sans SC");
    return (
        <Wrapper>
            <AppContainer>
                <ControlPanel>
                    <Button_Chinese>中文</Button_Chinese>
                    <Button_Chinese>EN</Button_Chinese>
                    <Button_Chinese>拼音</Button_Chinese>
                </ControlPanel>
                <Flashcard>
                    <Flashcard_Inner>
                        <Flashcard_Front fontFamily={font}>Dog</Flashcard_Front>
                        <Flashcard_Back>Shit</Flashcard_Back>
                    </Flashcard_Inner>
                </Flashcard>
            </AppContainer>
        </Wrapper>
    );
};
